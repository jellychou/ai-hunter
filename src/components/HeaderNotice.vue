<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="header flex items-center justify-between px-2">
    <el-icon size="large" @click="router.push('/')">
      <arrow-left-bold />
    </el-icon>
    <div class="flex">
      <div class="mr-2 theme-bg-color p-2 rounded text-sm">全部已讀</div>
      <div class="import-color p-2 rounded text-sm">全部清空</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
