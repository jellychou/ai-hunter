<script setup>
import { FullScreen } from "@element-plus/icons-vue";
import { defineProps, ref, defineEmits, reactive } from "vue";

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["dialogFeedBack"]);

const value1 = ref([]);

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
        <el-select
          class="w-full"
          v-model="value1"
          multiple
          size="large"
          placeholder="Select"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="mb-4">
        <span class="text-sm font-bold">提現到</span>
        <el-input :suffix-icon="FullScreen" placeholder="請在此輸入地址" />
      </div>
      <div class="mb-4">
        <span class="text-sm font-bold">提現數量</span>
        <el-input>
          <template #prepend>USDT</template>
        </el-input>
      </div>
      <div class="mb-4">
        <span class="text-sm font-bold">備註</span>
        <el-input placeholder="內容" />
      </div>
      <div class="d-block text-left mt-2">
        <el-checkbox class="login-checkbox" size="large">
          <div>我已確認發送的錢包地址正確。</div>
        </el-checkbox>
        <div class="text-red-600 text-xs">
          我瞭解提現需要支付手續費，手續費會動態變更。
        </div>
      </div>
      <div class="border rounded border-neutral-900 px-3 mt-5 my-3">
        <div class="flex my-4">
          <span>發送手續費：</span>
          <div class="border-b border-neutral-900 w-1/2 pl-2 text-xl font-500">
            123
          </div>
        </div>
        <div class="flex my-4">
          <span>合計金額：</span>
          <div class="border-b border-neutral-900 w-1/2 pl-2 text-xl font-500">
            1,231
          </div>
        </div>
      </div>
    </el-form>
    <template #footer>
      <el-button class="theme-bg-color w-3/5">確定</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
