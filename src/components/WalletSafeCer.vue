<script setup>
import LoginForgetDialog from "./LoginForgetDialog.vue";
import { ref, defineProps, defineEmits } from "vue";

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["dialogFeedBack"]);

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

const forgetPassword = ref(false);

const dialogFeedBack = () => {
  forgetPassword.value = true;
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="安全驗證"
    width="90%"
    center
    :before-close="handleClose"
  >
    <div class="mx-3">
      <div>
        <span>安全密碼</span>
        <el-input class="my-2" size="large" placeholder="請輸入安全密碼" />
        <div class="text-right">
          <a
            @click="forgetPassword = true"
            class="underline text-xs"
            href="javascript:;"
            >忘記安全密碼？</a
          >
        </div>
      </div>
      <div>
        <span>Google Authenticator 驗證</span>
        <el-input
          class="my-2"
          size="large"
          placeholder="請輸入Google Authenticator驗證"
        />
        <div class="text-right">
          <a class="underline text-xs" href="javascript:;">我要綁定</a>
        </div>
      </div>
      <span>電子信箱驗證</span>
      <div class="flex items-center justify-between">
        <div class="w-2/3">
          <el-input
            class="my-2"
            size="large"
            placeholder="請輸入電子信箱驗證"
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

<style lang="scss" scoped></style>
