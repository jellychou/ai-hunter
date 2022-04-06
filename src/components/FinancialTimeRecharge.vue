<script setup>
import FinancialRechargeCard from "@/components/FinancialRechargeCard.vue";
import { defineEmits, defineProps, ref } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

const isActive = ref(0);

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
    title="AiHunter使用時數充值"
    width="90%"
    center
    :before-close="handleClose"
  >
    <div class="px-3 pb-5">
      <div class="h-64 overflow-scroll">
        <FinancialRechargeCard
          @click="isActive = 0"
          :isActive="isActive === 0"
          point="360"
          pointUnit="天"
          usdt="500"
          mark="請於40天內使用完畢，過期即失效。"
        />
        <FinancialRechargeCard
          @click="isActive = 1"
          :isActive="isActive === 1"
          point="180"
          pointUnit="天"
          usdt="280"
          mark="請於40天內使用完畢，過期即失效。"
        />
        <FinancialRechargeCard
          @click="isActive = 2"
          :isActive="isActive === 2"
          point="90"
          pointUnit="天"
          usdt="160"
          mark="請於40天內使用完畢，過期即失效。"
        />
        <FinancialRechargeCard
          @click="isActive = 3"
          :isActive="isActive === 3"
          point="30"
          pointUnit="天"
          usdt="30"
          mark="請於40天內使用完畢，過期即失效。"
        />
      </div>

      <div class="text-center text-xl py-2">
        <span>充值費用總計：</span>
        <span class="text-red-600 text-xl font-bold"
          >100 / <span class="text-sm">USDT</span></span
        >
      </div>
      <div class="d-block text-left mt-2 px-3">
        <el-checkbox class="login-checkbox" size="large">
          <span class="break-all whitespace-normal text-xs">
            我已確認充值方案正確我也瞭解充值後無法退費，請謹慎操作。
          </span>
        </el-checkbox>
      </div>
      <div
        class="w-1/3 text-center theme-bg-color rounded px-2 py-1 block mx-auto mt-4"
      >
        充值
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.card-active {
  color: #000000;
  background-color: #b9bbb2;
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
