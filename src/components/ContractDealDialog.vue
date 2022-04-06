<script setup>
import ContractTradeSet from "./ContractTradeSet.vue";
import ContractTradeMaster from "./ContractTradeMaster.vue";
import { defineProps, defineEmits, ref } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const isTab = ref("set");

const handleClose = () => {
  emit("dialogFeedBack", false);
};

const handleSubmit = () => {
  emit("dialogFeedBack", true);
};

const changeTab = (tab) => {
  isTab.value = tab;
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="BTC 合約追隨"
    width="100%"
    fullscreen
    center
    :show-close="false"
    :before-close="handleClose"
  >
    <div class="flex items-center justify-center mb-2">
      <div
        class="px-2 pb-1 mx-2 border-b-4"
        :class="{ 'border-green-900': isTab === 'set' }"
        @click="changeTab('set')"
      >
        設定
      </div>
      <div
        class="px-2 pb-1 mx-2 border-b-4"
        :class="{ 'border-green-900': isTab === 'master' }"
        @click="changeTab('master')"
      >
        高手
      </div>
    </div>
    <ContractTradeSet v-if="isTab === 'set'" />
    <ContractTradeMaster v-else />
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

<style lang="scss" scoped>
.card {
  background-color: #4a551663;
  .member-info-head {
    height: 120px;
    width: 120px;
    object-fit: cover;
  }
}
.financial-card {
  border: 1px solid #b9bbb2;
  border-radius: 5px;
}

.button-footer {
  height: 50px;
}
</style>
