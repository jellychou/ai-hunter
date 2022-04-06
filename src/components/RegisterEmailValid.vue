<script setup>
import { defineProps, defineEmits, ref } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const handleClose = () => {
  emit("dialogFeedBack", false);
};

const timeOut = ref(60);
const handTimeOut = ref("");
const isShowButton = ref(false);

const getVerCode = () => {
  isShowButton.value = true;
  handTimeOut.value = setInterval(countDown, 1000);
};

const countDown = () => {
  timeOut.value--;
  if (timeOut.value === 0) {
    clearInterval(handTimeOut.value);
    isShowButton.value = false;
  }
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="設定並驗證電子郵件信箱"
    width="90%"
    center
    :before-close="handleClose"
  >
    <div class="mx-3">
      <div class="text-center">
        請輸入您的電子郵件信箱，系統將發
        送驗證信件到以下電子郵件信箱，請收取信件，並輸入驗證碼。
      </div>
      <div>
        <el-input class="my-2" size="large" placeholder="請輸入電子郵件信箱" />
      </div>
      <div class="flex items-center justify-between">
        <div class="w-2/3">
          <el-input class="my-2" size="large" placeholder="驗證碼" />
        </div>
        <div
          v-if="!isShowButton"
          class="px-2 py-2 rounded bg-yellow-500 text-white"
          @click="getVerCode"
        >
          發送驗證碼
        </div>
        <div
          v-else
          class="px-1 py-2 rounded border border-green-900 theme-text-color text-xs"
        >
          {{ timeOut }} 秒 重新發送
        </div>
      </div>
      <div class="text-red-600 text-xs">※ 您可隨時使用此郵箱找回密碼及登錄。</div>
      <div class="text-red-600 text-xs">
        ※ 此郵箱為您出金提領時，驗證程序及訊息通知使用。
      </div>
      <div class="text-red-600 text-xs">
        ※ 請勿隨意泄漏郵箱地址，以防不法份子利用，騙取帳號訊息。
      </div>
    </div>
    <template #footer>
      <div class="mx-3">
        <el-button class="theme-bg-color w-3/5">完成驗證</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
