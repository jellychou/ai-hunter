<script setup>
import FinancialPointRecharge from "@/components/FinancialPointRecharge.vue";
import FinancialTimeRecharge from "@/components/FinancialTimeRecharge.vue";
import FinancialCard from "@/components/FinancialCard.vue";
import { ref } from "vue";

const dialogVisiblePoint = ref(false);
const dialogVisibleTime = ref(false);

const dialogFeedBack = () => {
  dialogVisiblePoint.value = false;
  dialogVisibleTime.value = false;
};

const cardValue = ref("0.00");
</script>

<template>
  <div class="mt-3 mb-5">
    <div class="text-left">全部獲利</div>
    <div class="grid grid-cols-2 gap-2">
      <FinancialCard cardTitle="獲利總計(USDT)" :cardValue="cardValue" />
      <FinancialCard cardTitle="24H獲利" :cardValue="cardValue" />
    </div>
  </div>
  <div class="mt-3 mb-5">
    <div class="text-left">現貨獲利</div>
    <div class="grid grid-cols-2 gap-2">
      <FinancialCard cardTitle="獲利總計(USDT)" :cardValue="cardValue" />
      <FinancialCard cardTitle="24H獲利" :cardValue="cardValue" />
    </div>
  </div>
  <div class="mt-3 mb-5">
    <div class="text-left">合約獲利</div>
    <div class="grid grid-cols-2 gap-2">
      <FinancialCard cardTitle="24H獲利" :cardValue="cardValue" />
      <FinancialCard cardTitle="24H獲利" :cardValue="cardValue" />
    </div>
  </div>
  <hr />
  <div class="mt-3 mb-5">
    <div class="flex items-center justify-between">
      <div>
        燃料點數
        <span class="text-red-600 text-xs">※點數不足時，系統將停止交易</span>
      </div>
      <font-awesome-icon
        class="mr-2"
        :icon="['fas', 'plus']"
        @click="dialogVisiblePoint = true"
      />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <FinancialCard cardTitle="剩於點數" :cardValue="cardValue" />
      <FinancialCard cardTitle="已使用" :cardValue="cardValue" />
    </div>
    <div class="d-block text-left mt-2">
      <el-checkbox class="login-checkbox" size="large">
        <div>開啟燃料點數自動充值。</div>
      </el-checkbox>
      <div class="text-red-600 text-xs">
        (請確保您的錢包有足夠餘額此功能開啟後，當燃料點數低於50點，系統將自動為您充值100點，若錢包餘額不足，將無法執行。)
      </div>
    </div>
  </div>
  <hr />
  <div class="mt-3 mb-5">
    <div class="flex items-center justify-between">
      <div class="text-left">
        AiHunter 使用有效期
        <div class="text-red-600 text-xs">
          ※過期後，系統將停止交易，並且中斷獎金分配權
        </div>
      </div>
      <font-awesome-icon
        class="mr-2"
        @click="dialogVisibleTime = true"
        :icon="['fas', 'plus']"
      />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <FinancialCard cardTitle="剩於時數" :cardValue="cardValue" />
      <FinancialCard cardTitle="已使用時數" :cardValue="cardValue" />
    </div>
    <div class="d-block text-left mt-2">
      <el-checkbox class="login-checkbox" size="large">
        <div>開啟使用有效期自動充值</div>
      </el-checkbox>
      <div class="text-red-600 text-xs">
        (請確保您的錢包有足夠餘額此功能開啟後，當使用有效期低於24小時，系統將自動為您充值30日，若錢包餘額不足，將無法執行。)
      </div>
    </div>
  </div>
  <FinancialPointRecharge
    :dialogVisible="dialogVisiblePoint"
    @dialogFeedBack="dialogFeedBack"
  />
  <FinancialTimeRecharge
    :dialogVisible="dialogVisibleTime"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped></style>
