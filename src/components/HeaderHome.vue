<script setup>
import SetGoldKeyDialog from "./SetGoldKeyDialog.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const dialogVisible = ref(false);

const openSetKeyDialog = () => {
  dialogVisible.value = true;
};

const dialogFeedBack = (Boolean) => {
  if (!Boolean) return (dialogVisible.value = false);
  // confirm button click do some thing!
};
</script>

<template>
  <div class="header flex items-center justify-between px-2">
    <img
      class="header-logo"
      @click="router.push({ name: 'Home' })"
      src="@/assets/image/header-logo.png"
      alt="logo"
    />
    <div class="flex items-center">
      <a
        href="javascript:;"
        class="pr-3 theme-text-color"
        @click="openSetKeyDialog"
        >設定金鑰</a
      >
      <div class="flex items-center" @click="router.push({ name: 'NoticeList' })">
        <el-icon size="large" class="relative"><bell /></el-icon>
        <span class="notice rounded-full flex items-center justify-center"
          >12</span
        >
      </div>
    </div>
  </div>
  <SetGoldKeyDialog
    :dialogVisible="dialogVisible"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped>
.header {
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
