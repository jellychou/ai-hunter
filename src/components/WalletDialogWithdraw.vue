<script setup>
import { CopyDocument } from "@element-plus/icons-vue";
import { defineProps, defineEmits, reactive } from "vue";

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
</script>
<template>
  <el-dialog
    :model-value="dialogVisible"
    title="提現"
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
      <div class="flex items-center justify-center">
        <img src="../assets/image/header-logo.png" alt="" />
      </div>
      <div class="mb-4">
        <span class="text-sm font-bold">錢包地址</span>
        <el-input>
          <template #append>
            <el-icon><copy-document /></el-icon>
          </template>
        </el-input>
      </div>
    </el-form>
    <template #footer>
      <el-button class="theme-bg-color w-3/5">確定</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
