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

const forgetPassword = ref(false);

const handleClose = () => {
  emit("dialogFeedBack", false);
};

const dialogFeedBack = () => {
  forgetPassword.value = false;
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="變更會員登入密碼"
    width="90%"
    center
    :before-close="handleClose"
  >
    <div class="mx-3">
      <el-input class="my-2" size="large" placeholder="請輸入會員登入密碼" />
      <el-input class="my-2" size="large" placeholder="請輸入舊安全密碼" />
      <el-input class="my-2" size="large" placeholder="請輸入新安全密碼" />
      <el-input class="my-2" size="large" placeholder="確認新安全密碼" />
      <div class="text-right">
        <a
          @click="forgetPassword = true"
          class="underline text-xs"
          href="javascript:;"
          >忘記密碼？</a
        >
      </div>
      <div class="leading-none text-left text-sm text-red-600 my-2 flex">
        <span class="pr-2">※</span>
        <span> 請妥善保存您的密碼，請勿交由其他人 以確保您的資產安全。 </span>
      </div>
    </div>
    <template #footer>
      <div class="mx-3">
        <el-button class="theme-bg-color w-3/5">確認修改</el-button>
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
