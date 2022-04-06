<script setup>
import { reactive } from "@vue/reactivity";
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const form = reactive({
  key: "",
  password: "",
  isRemember: "",
});

const handleClose = () => {
  emit("dialogFeedBack", false);
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="幣安 Binance API KEY 設定"
    width="90%"
    center
    :before-close="handleClose"
  >
    <div class="px-3">
      <el-input
        v-model="form.key"
        class="my-2"
        size="large"
        type="text"
        placeholder="請輸入您幣安的 Binance API KEY"
      />
      <el-input
        v-model="form.password"
        class="my-2"
        size="large"
        type="password"
        placeholder="請輸入您幣安的 Binance API Password"
      />
      <div class="leading-none text-left text-sm text-red-600 my-2 flex">
        <span class="pr-2">※</span>
        <span> 建議您使用複製貼上，必免輸入錯誤。 </span>
      </div>
      <div class="d-block text-left">
        <el-checkbox
          class="login-checkbox text-sm"
          v-model="form.isRemember"
          label="我已確認我的 API KEY 無誤。"
          size="large"
        />
      </div>
    </div>
    <template #footer>
      <div class="flex items-center justify-around">
        <el-button class="theme-bg-color w-2/5">儲存</el-button>
        <el-button class="import-color w-2/5">清除</el-button>
      </div>
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
