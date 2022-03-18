<script setup>
import { reactive } from "@vue/reactivity";
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});

const form = reactive({
  email: "",
});

const handleClose = () => {
  emit("dialogFeedBack", false);
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="title"
    width="90%"
    center
    :before-close="handleClose"
  >
    <div>
      系統將發送驗證信件到以下信箱點 擊驗證連結後，系統會在發送一組
      預設密碼到以下的電子郵件信箱請 您使用預設密碼登入後，立即修改 密碼。
    </div>
    <el-input
      v-model="form.email"
      class="my-2"
      size="large"
      placeholder="請輸入您註冊的電子郵件信箱"
    />
    <div class="dialog-forget__notice my-2 flex">
      <span class="pr-2">※</span>
      <span> 注意，系統發送的驗證信件，有效時間為24H，逾期失效。 </span>
    </div>
    <template #footer>
      <el-button class="theme-bg-color w-3/5">確認發送</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.el-dialog {
  .el-dialog__body {
    text-align: left;
    line-height: 1.6;
    padding: 10px 30px;
  }

  .dialog-forget__notice {
    font-size: 0.8rem;
    text-align: left;
    line-height: 1;
    color: red;
  }
}
</style>
