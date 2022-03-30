<script setup>
import { getHeaderTitle } from "@/utils/value";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="header flex items-center justify-between px-2">
    <el-icon size="large" @click="router.push('/')">
      <arrow-left-bold />
    </el-icon>
    <div>{{ getHeaderTitle(router.currentRoute.value.path) }}</div>
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
