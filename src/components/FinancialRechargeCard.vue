<script setup>
import { defineProps } from "vue";

defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  point: {
    type: Number,
    default: 0,
  },
  usdt: {
    type: Number,
    default: 0,
  },
  pointUnit: {
    type: String,
    default: "點",
  },
  mark: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="border rounded border-neutral-900 px-2 py-3 mb-2"
    :class="{ 'card-active': isActive }"
  >
    <div class="flex justify-between">
      <div class="text-xl">
        充值 <span class="text-red-600"> {{ point }} </span> {{ pointUnit }}
      </div>
      <div class="text-red-600 text-xl">
        {{ usdt }} / <span class="text-xs">USDT</span>
      </div>
    </div>
    <div class="text-xs">{{ mark }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
