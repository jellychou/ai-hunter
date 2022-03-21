<script setup>
import FinancialCard from "@/components/FinancialCard.vue";
</script>

<template>
  <div class="header flex items-center justify-between px-2">
    <el-icon size="large" @click="router.push('/')">
      <arrow-left-bold />
    </el-icon>
    <img src="@/assets/image/header-logo.png" alt="" />
  </div>
  <div class="financial-content">
    <div class="mt-3 mb-5">
      <div class="text-left">全部獲利</div>
      <FinancialCard
        totalNum="0.00"
        totalTitle="獲利總計 (USDT)"
        profitTitle="24h 獲利"
        profitNum="0.00"
      />
    </div>
    <div class="mt-3 mb-5">
      <div class="text-left">現貨獲利</div>
      <FinancialCard
        totalNum="0.00"
        totalTitle="獲利總計 (USDT)"
        profitTitle="24h 獲利"
        profitNum="0.00"
      />
    </div>
    <div class="mt-3 mb-5">
      <div class="text-left">合約獲利</div>
      <FinancialCard
        totalNum="0.00"
        totalTitle="獲利總計 (USDT)"
        profitTitle="24h 獲利"
        profitNum="0.00"
      />
    </div>
    <hr />
    <div class="mt-3 mb-5">
      <div class="flex items-center justify-between">
        <div>
          燃料點數
          <span class="text-red-600 text-xs">(點數不足時，系統將停止交易)</span>
        </div>
        <font-awesome-icon :icon="['fas', 'plus']" />
      </div>
      <FinancialCard
        totalNum="0.00"
        totalTitle="剩餘點數"
        profitTitle="已使用"
        profitNum="0.00"
      />
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
          AiHunter 使用有效期<br>
          <span class="text-red-600 text-xs"
            >(過期後，系統將停止交易，並且中斷獎金分配權)</span
          >
        </div>
        <font-awesome-icon :icon="['fas', 'plus']" />
      </div>
      <FinancialCard
        totalNum="30天 00:00分"
        totalTitle="剩於時數"
        profitTitle="已使用時數"
        profitNum="0天 00:00分"
      />
      <div class="d-block text-left mt-2">
        <el-checkbox class="login-checkbox" size="large">
          <div>開啟使用有效期自動充值</div>
        </el-checkbox>
        <div class="text-red-600 text-xs">
          (請確保您的錢包有足夠餘額此功能開啟後，當使用有效期低於24小時，系統將自動為您充值30日，若錢包餘額不足，將無法執行。)
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.financial-content {
    margin-top: 60px;
    margin-bottom: 60px;
}

</style>
