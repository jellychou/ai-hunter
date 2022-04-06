<script setup>
import usePie from "../plugins/usePie";
import { onMounted, ref } from "vue";

const container = ref(null);

onMounted(() => {
  const { setOption } = usePie(container.value);
  setOption([1900, 2000, 1000, 700, 1500, 600, 900]);
});
</script>

<template>
  <div ref="container"></div>
  <span class="chart-title text-red-600 text-sm">7日</span>
</template>

<style lang="scss" scoped>
.chart-title {
  position: absolute;
  top: 42px;
  right: 25px;
}
</style>
