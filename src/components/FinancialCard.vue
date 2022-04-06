<script setup>
import { defineProps } from "vue";

defineProps({
  cardValue: {
    type: String,
    default: "",
  },
  cardTitle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <!-- <div class="grid grid-cols-2 gap-2"> -->
  <!-- <div class="financial-card text-left py-3 px-2">
      <div class="text-gray-400 text-xs mb-2">{{ totalTitle }}</div>
      <div class="text-green-500 text-2xl font-500">{{ totalNum }}</div>
    </div> -->
  <div class="financial-card text-left py-3 px-2">
    <div class="text-gray-400 text-xs mb-2">{{ cardTitle }}</div>
    <div class="text-green-500 text-2xl font-500">{{ cardValue }}</div>
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.financial-card {
  border: 1px solid #b9bbb2;
  border-radius: 5px;
}
</style>
