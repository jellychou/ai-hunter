<script setup>
import LoginForgetDialog from "@/components/LoginForgetDialog.vue";
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

const forgetPassword = ref(false);

const dialogFeedBack = () => {
  forgetPassword.value = false;
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
    title="重新綁定"
    width="90%"
    center
    :before-close="handleClose"
  >
    <div class="mx-3">
      <div class="text-center">Google Authenticator 驗證</div>
      <div>
        <span>會員密碼：</span>
        <el-input class="my-2" size="large" placeholder="請輸入會員密碼" />
        <div class="text-right">
          <a
            @click="forgetPassword = true"
            class="underline text-xs"
            href="javascript:;"
            >忘記密碼？</a
          >
        </div>
      </div>
      <span>電子信箱驗證：</span>
      <div class="flex items-center justify-between">
        <div class="w-2/3">
          <el-input
            class="my-2"
            size="large"
            placeholder="請輸入電子信箱驗證碼"
          />
        </div>
        <div
          v-if="!isShowButton"
          class="px-2 py-2 rounded bg-yellow-500 text-white"
          @click="getVerCode"
        >
          獲取驗證碼
        </div>
        <div
          v-else
          class="px-1 py-2 rounded border border-green-900 theme-text-color text-xs"
        >
          {{ timeOut }} 秒 重新發送
        </div>
      </div>
    </div>
    <template #footer>
      <div class="mx-3">
        <el-button class="theme-bg-color w-3/5">送出</el-button>
      </div>
    </template>
  </el-dialog>
  <LoginForgetDialog
    :dialogVisible="forgetPassword"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped>
.el-dialog {
  .el-dialog__body {
    text-align: left;
    line-height: 1.6;
    padding: 10px 30px;
  }
}
</style>
