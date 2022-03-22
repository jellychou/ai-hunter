<script setup>
import { defineProps, defineEmits } from "vue";

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
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="我的簡介"
    width="90%"
    center
    :before-close="handleClose"
  >
    <div class="mx-3">
      <el-input class="my-2" size="large" placeholder="輸入暱稱" />
      <el-input
        class="my-2"
        size="large"
        type="textarea"
        placeholder="輸入簡單介紹"
      />
    </div>

    <template #footer>
      <div class="mx-3">
        <el-button class="theme-bg-color w-3/5">確認修改</el-button>
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
}
</style>
