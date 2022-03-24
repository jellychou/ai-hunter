<script setup>
import WalletDialog from "@/components/WalletDialog.vue";
import WalletDialogWithdraw from "@/components/WalletDialogWithdraw.vue";
import WalletDialogRecharge from "@/components/WalletDialogRecharge.vue";
import { ref } from "vue";
const dialogVisible = ref("");

const openDialog = (val) => {
  dialogVisible.value = val;
};

const dialogFeedBack = (Boolean) => {
  if (!Boolean) return (dialogVisible.value = "");
  // confirm button click do some thing!
};
</script>

<template>
  <div class="header flex items-center justify-center px-2 theme-bg-color">
    錢包
  </div>
  <div
    class="font-bold flex items-center justify-between py-1 px-2 my-3 rounded"
    style="background-color: #505c172e"
  >
    <div>資產</div>
  </div>
  <div class="wallet-card text-left py-3 px-2">
    <div class="text-gray-400 text-sm mb-2">總資產(USDT)</div>
    <div class="text-4xl font-bold">729.02</div>
    <div class="flex items-center justify-end mt-1">
      <div
        class="w-1/2 mr-2 bg-yellow-300 text-white px-1 py-2 rounded text-sm text-center"
        @click="openDialog('withdraw')"
      >
        儲值
      </div>
      <div
        class="w-1/2 px-1 py-2 bg-blue-900 rounded text-sm text-center text-white"
        @click="openDialog('recharge')"
      >
        提現
      </div>
    </div>
  </div>
  <div
    class="font-bold flex items-center justify-between px-2 py-1 my-3 rounded"
    style="background-color: #505c172e"
  >
    <div>可用餘額</div>
    <a
      class="text-yellow-500 underline text-sm"
      href="javascript:;"
      @click="openDialog('detail')"
    >
      帳務明細
    </a>
  </div>
  <div class="wallet-card text-left py-3 px-2 mb-5">
    <div class="text-gray-400 text-sm mb-2">儲值餘額</div>
    <div class="text-4xl font-bold">729.02</div>
  </div>
  <div class="wallet-card text-left py-3 px-2 mb-5">
    <div class="text-gray-400 text-sm mb-2">推薦獎勵</div>
    <div class="text-4xl font-bold">729.02</div>
  </div>
  <div class="wallet-card text-left py-3 px-2 mb-5">
    <div class="text-gray-400 text-sm mb-2">帶單收入</div>
    <div class="text-4xl font-bold">729.02</div>
  </div>
  <WalletDialog
    :dialogVisible="dialogVisible === 'detail'"
    @dialogFeedBack="dialogFeedBack"
  />
  <WalletDialogWithdraw
    :dialogVisible="dialogVisible === 'withdraw'"
    @dialogFeedBack="dialogFeedBack"
  />
  <WalletDialogRecharge
    :dialogVisible="dialogVisible === 'recharge'"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped>
.wallet-card {
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  box-shadow: 6px 10px 10px #b9bbb2;
}
</style>
