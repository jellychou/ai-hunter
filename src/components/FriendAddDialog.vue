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
    title="好友推薦"
    width="100%"
    fullscreen
    center
    :before-close="handleClose"
  >
    <div class="grid justify-items-center content-center h-full">
      <img
        class="my-5"
        src="@/assets/image/qrcode.png"
        alt="add friend qr code"
      />
      <div class="text-xl font-bold">請掃描 QR Code 加入！</div>
      <div class="my-2">我的推薦連結</div>
      <el-input type="text" class="w-3/4">
        <template #append>點我複製</template>
      </el-input>
      <div class="flex items-center justify-center my-5">
        <img src="@/assets/image/tw-icon.png" alt="" />
        <img src="@/assets/image/fb-icon.png" alt="" />
        <img src="@/assets/image/chat-icon.png" alt="" />
        <img src="@/assets/image/line-icon.png" alt="" />
      </div>
      <div class="text-sm theme-bg-color rounded px-3 py-2">保存 QR code</div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
