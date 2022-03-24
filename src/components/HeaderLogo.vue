<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="header flex items-center justify-between px-2">
    <div></div>
    <img
      class="header-logo"
      @click="router.push({ name: 'Home' })"
      src="@/assets/image/header-logo.png"
      alt="logo"
    />
    <div></div>
  </div>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 45px;
  background-color: #ffffff;
  z-index: 10;
  box-shadow: 0 10px 15px -3px #c3c3c39e;
  .header-logo {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
