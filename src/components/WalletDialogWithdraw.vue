<script setup>
import { CopyDocument } from "@element-plus/icons-vue";
import { defineProps, defineEmits, reactive, ref } from "vue";

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

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

const form = reactive([]);
const walletCode = ref("0x76a479270ff2da0c802a39c4e37538f0ec485ed8");
</script>
<template>
  <el-dialog
    :model-value="dialogVisible"
    title="儲值"
    width="100%"
    fullscreen
    center
    :before-close="handleClose"
  >
    <el-form :model="form" class="px-8">
      <div class="mb-4">
        <span class="text-sm font-bold">幣種</span>
        <el-select class="w-full" multiple size="large" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="mb-4">
        <span class="text-sm font-bold">主網類型</span>
        <el-select class="w-full" multiple size="large" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="flex items-center justify-center p-3">
        <img src="@/assets/image/qrcode.png" alt="" />
      </div>
      <div class="grid justify-items-center content-center">
        <div class="text-center my-4 text-red-600 text-xl">此地址只接收ERC20 USDT</div>
        <div class="w-1/2 text-sm theme-bg-color rounded px-3 py-2 my-3 text-center">
          保存 QR code
        </div>
      </div>
      <div class="mb-4">
        <span class="text-sm font-bold">錢包地址</span>
        <el-input v-model="walletCode">
          <template #append>
            <el-icon><copy-document /></el-icon>
          </template>
        </el-input>
      </div>
    </el-form>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
