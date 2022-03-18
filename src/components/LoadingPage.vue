<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const { state } = useStore();
const isOpenPage = computed(() => state.isOpenPage);
</script>

<template>
  <div :class="['star-page']" v-show="isOpenPage">
    <img class="star-page-logo" src="@/assets/image/logo.png" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.star-page {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  animation: fadeIn 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  .star-page-logo {
    width: 100%;
    max-height: 100%;
    max-width: 100%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
