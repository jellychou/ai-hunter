<script setup>
import { ref } from "vue";
import WalletDialog from '@/components/WalletDialog.vue'
const dialogVisible = ref(false);

const openSetKeyDialog = () => {
  dialogVisible.value = true;
};

const dialogFeedBack = (Boolean) => {
  if (!Boolean) return (dialogVisible.value = false);
  // confirm button click do some thing!
};
</script>

<template>
  <div class="header flex items-center justify-center px-2">
    <div>我的錢包</div>
  </div>
  <div class="wallet-content">
    <div class="wallet-card text-left py-3 px-2">
      <div class="text-gray-400 text-sm mb-2">總資產(USDT)</div>
      <div class="text-4xl font-bold">729.02</div>
    </div>
    <div class="flex my-4">
      <div class="w-1/2 mr-2 theme-bg-color px-2 py-3 rounded text-sm">
        儲值
      </div>
      <div class="w-1/2 import-color px-2 py-3 rounded text-sm">提現</div>
    </div>
    <hr />
    <div class="flex items-center justify-between px-2 my-3">
      <div>可用餘額</div>
      <a
        class="text-blue-700 underline"
        href="javascript:;"
        @click="openSetKeyDialog"
      >
        帳務明細
      </a>
    </div>
    <div class="wallet-card text-left py-3 px-2 mb-3">
      <div class="text-gray-400 text-sm mb-2">儲值餘額</div>
      <div class="text-4xl font-bold">729.02</div>
    </div>
    <div class="wallet-card text-left py-3 px-2 mb-3">
      <div class="text-gray-400 text-sm mb-2">推薦獎勵</div>
      <div class="text-4xl font-bold">729.02</div>
    </div>
    <div class="wallet-card text-left py-3 px-2 mb-3">
      <div class="text-gray-400 text-sm mb-2">帶單收入</div>
      <div class="text-4xl font-bold">729.02</div>
    </div>
  </div>
  <WalletDialog
    :dialogVisible="dialogVisible"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped>
.wallet-content {
  margin-top: 60px;
  margin-bottom: 60px;
  .wallet-card {
    border: 1px solid #b9bbb2;
    border-radius: 5px;
  }
}
</style>
