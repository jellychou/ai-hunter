<script setup>
import ContractDealDialog from "@/components/ContractDealDialog.vue";
import ContractMasterDialog from "@/components/ContractMasterDialog.vue";
import ContractHistoryDialog from "@/components/ContractHistoryDialog.vue";
import MasterHistoryDialog from "@/components/MasterHistoryDialog.vue";
import { reactive, ref } from "vue";
import { getValueColor } from "@/utils/value";

const btcVal = ref(2.4);
const btcVal2 = ref(-12.4);

const followData = reactive([
  {
    name: "BTC/USDT",
    status: false,
  },
  {
    name: "ETH/USDT",
    status: true,
  },
]);

const setData = reactive([
  {
    name: "BTC/USDT",
    status: false,
    isFollow: true,
  },
  {
    name: "ETH/USDT",
    status: true,
    isFollow: false,
  },
]);

const setDialogVisible = ref(false);
const dealDialogVisible = ref(false);
const masterHistory = ref(false);
const contractHistory = ref(false);

const openMasterSetDialog = () => {
  setDialogVisible.value = true;
};

const openDealSetDialog = () => {
  dealDialogVisible.value = true;
};

const dialogFeedBack = () => {
  setDialogVisible.value = false;
  masterHistory.value = false;
  contractHistory.value = false;
  dealDialogVisible.value = false;
};
</script>

<template>
  <div class="px-1">
    <div class="grid grid-cols-2 gap-2">
      <div class="rounded border border-neutral-900 px-3 py-2">
        <div class="text-left">
          <span class="text-xl">BTC/USDT </span>
          <span :class="getValueColor(btcVal)" class="text-sm"
            >{{ `${btcVal > 0 ? "+" : "-"}${btcVal}` }}%</span
          >
        </div>
        <div class="font-bold text-3xl mt-3" :class="getValueColor(btcVal)">
          43656.37
        </div>
      </div>
      <div class="rounded border border-neutral-900 px-3 py-2">
        <div class="text-left">
          <span class="text-xl">BTC/USDT </span>
          <span v-if="btcVal2 >= 0" class="text-sm text-green-500"
            >+{{ btcVal2 }}%</span
          >
          <span v-else class="text-sm text-red-600">{{ btcVal2 }}%</span>
        </div>
        <div class="font-bold text-3xl mt-3" :class="getValueColor(btcVal2)">
          43656.37
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-between px-1 my-2 rounded"
      style="background-color: #505c172e"
    >
      <span>追隨高手</span>
      <span class="text-sm underline" @click="masterHistory = true"
        >歷史紀錄</span
      >
    </div>
    <table class="w-full">
      <tr class="grid grid-cols-3 gap-3">
        <th class="text-left">名稱</th>
        <th class="text-center">狀態</th>
        <th class="text-right">設定</th>
      </tr>
      <tr
        v-for="item in followData"
        :key="item.name"
        class="grid grid-cols-3 gap-3 text-left flex items-center justify-center border-b border-neutral-900"
      >
        <td>{{ item.name }}</td>
        <td class="flex justify-center text-center">
          <el-switch
            v-model="item.status"
            class="ml-2"
            inline-prompt
            active-color="#4a5516"
            inactive-color="#dc2626"
            active-text="開"
            inactive-text="關"
          />
        </td>
        <td class="text-right">
          <span
            class="text-xs border border-neutral-900 rounded px-1"
            @click="openMasterSetDialog(item)"
            >設定</span
          >
        </td>
      </tr>
    </table>
    <div
      class="flex items-center justify-between px-1 my-2 rounded"
      style="background-color: #505c172e"
    >
      <span>自設交易</span>
      <span class="text-sm underline" @click="contractHistory = true"
        >歷史紀錄</span
      >
    </div>
    <table class="w-full">
      <tr class="grid grid-cols-4 gap-4">
        <th class="text-left">名稱</th>
        <th class="text-center">狀態</th>
        <th class="text-center">開放追隨</th>
        <th class="text-right">設定</th>
      </tr>
      <tr
        v-for="item in setData"
        :key="item.name"
        class="grid grid-cols-4 gap-4 text-left flex items-center justify-center border-b border-neutral-900"
      >
        <td>{{ item.name }}</td>
        <td class="flex justify-center text-center">
          <el-switch
            v-model="item.status"
            class="ml-2"
            inline-prompt
            active-color="#4a5516"
            inactive-color="#dc2626"
            active-text="開"
            inactive-text="關"
          />
        </td>
        <td class="text-center">
          <el-checkbox
            v-model="item.isFollow"
            class="login-checkbox"
            size="large"
          />
        </td>
        <td class="text-right">
          <span
            class="text-xs border border-neutral-900 rounded px-1"
            @click="openDealSetDialog(item)"
          >
            設定
          </span>
        </td>
      </tr>
    </table>
  </div>
  <ContractDealDialog
    :dialogVisible="setDialogVisible"
    @dialogFeedBack="dialogFeedBack"
  />
  <ContractMasterDialog
    :dialogVisible="dealDialogVisible"
    @dialogFeedBack="dialogFeedBack"
  />
  <ContractHistoryDialog
    :dialogVisible="contractHistory"
    @dialogFeedBack="dialogFeedBack"
  />
  <MasterHistoryDialog
    :dialogVisible="masterHistory"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped></style>
