<script setup>
import { defineProps } from "vue";

defineProps({
  itemData: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <div class="h-full overflow-y-scroll px-2">
    <div
      class="wallet-list flex items-center justify-between text-black px-2 py-1"
      v-for="item in itemData"
      :key="item.list_2"
    >
      <span>{{ item.list_1 }}</span>
      <span>{{ item.list_2 }}</span>
      <span>{{ item.list_3 }}</span>
      <span>{{ item.list_4 }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wallet-list:nth-child(odd) {
  background-color: #dcddd6;
}
</style>
