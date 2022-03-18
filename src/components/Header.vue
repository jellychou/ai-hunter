<script setup></script>

<template>
  <div class="header flex items-center justify-between px-2">
    <img class="header-logo" src="@/assets/image/header-logo.png" alt="logo" />
    <div class="flex items-center">
      <a href="javascript:;" class="pr-3 theme-text-color">設定金鑰</a>
      <el-icon size="large" class="relative"><bell /></el-icon>
      <span class="notice rounded-full flex items-center justify-center"
        >12</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #ffffff;
  .header-logo {
    max-height: 100%;
    max-width: 100%;
  }
  .notice {
    position: absolute;
    right: 3px;
    top: 10px;
    height: 14px;
    width: 14px;
    color: #ffffff;
    font-size: 0.6rem;
    background-color: rgb(214, 65, 65);
  }
}
</style>
