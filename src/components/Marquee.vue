<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    message: "Welcome to Ai Hunter Trader",
  },
  {
    message: "Welcome to Ai Hunter Trader2",
  },
  {
    message: "Welcome to Ai Hunter Trader3",
  },
]);
</script>

<template>
  <div class="marquee flex items-center">
    <span class="w-1/12">
      <font-awesome-icon class="theme-text-color" :icon="['fas', 'bullhorn']" />
    </span>
    <Vue3Marquee class="w-11/12">
      <span class="pr-10" v-for="item in data" :key="item.message">
        {{ item.message }}
      </span>
    </Vue3Marquee>
  </div>
</template>

<style lang="scss" scoped>
.marquee {
  height: 40px;
  width: 100%;
}
</style>
