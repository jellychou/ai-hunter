<script setup>
import { defineEmits, defineProps, ref, onMounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["getTabValue"]);

const isTabActive = ref();

const toTab = (val, index) => {
  isTabActive.value = val;
  emit("getTabValue", index);
};

onMounted(() => {
  isTabActive.value = props.items[0];
});
</script>

<template>
  <ul class="flex items-center justify-between text-sm">
    <li
      @click="toTab(item, index)"
      class="border-b-2 pb-1"
      :class="{ 'border-b-2 border-green-900': isTabActive === item }"
      v-for="(item, index) in items"
      :key="item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
