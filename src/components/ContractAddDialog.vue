<script setup>
import { defineProps, defineEmits, reactive } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

defineProps({
  title: {
    type: String,
    default: "",
  },
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const handleClose = () => {
  emit("dialogFeedBack", false);
};

const handleSubmit = () => {
  emit("dialogFeedBack", true);
};

const form = reactive([]);
</script>
<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="title"
    width="90%"
    center
    :before-close="handleClose"
  >
    <div class="px-3">
      <el-form :model="form" label-width="100px">
        <el-form-item label="名稱：">
          <el-input placeholder="請輸入自設名稱" />
        </el-form-item>
        <el-form-item label="技術指標：">
          <el-select>
            <el-option label="MA" value="MA" />
            <el-option label="MA" value="MA" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-checkbox-group>
            <el-checkbox
              class="break-all whitespace-normal text-xs"
              label="開盤價"
              name="type"
            />
            <el-checkbox
              class="break-all whitespace-normal text-xs"
              label="收盤價"
              name="type"
            />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="分時線：">
          <el-select>
            <el-option label="MA" value="MA" />
            <el-option label="MA" value="MA" />
          </el-select>
        </el-form-item>
        <el-form-item label="交叉短線：">
          <el-select>
            <el-option label="MA" value="MA" />
            <el-option label="MA" value="MA" />
          </el-select>
        </el-form-item>
        <el-form-item label="交叉長線：">
          <el-select>
            <el-option label="MA" value="MA" />
            <el-option label="MA" value="MA" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer flex items-center justify-around">
        <el-button class="theme-bg-color w-2/5" @click="handleSubmit"
          >儲存</el-button
        >
        <el-button class="bg-red-600 text-white w-2/5" @click="handleClose"
          >取消</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
