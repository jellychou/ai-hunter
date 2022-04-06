<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SetGoldKeyDialog from "@/components/SetGoldKeyDialog.vue";
import AdminDialog from "@/components/AdminDialog.vue";

const router = useRouter();

const dialogVisible = ref(false);
const adminDialogVisible = ref(false);


const dialogFeedBack = (Boolean) => {
  if (!Boolean)
    return (dialogVisible.value = false), (adminDialogVisible.value = false);
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
    <span @click="adminDialogVisible = true">登入/註冊</span>
    <div class="flex items-center">
      <a
        href="javascript:;"
        class="pr-3 theme-text-color"
        @click="dialogVisible = true;"
        >設定金鑰</a
      >
      <div
        class="flex items-center"
        @click="router.push({ name: 'NoticeList' })"
      >
        <font-awesome-icon
          class="relative text-2xl absolute theme-text-color"
          :icon="['fas', 'bell']"
        />
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
  <AdminDialog
    :dialogVisible="adminDialogVisible"
    @dialogFeedBack="dialogFeedBack"
  />
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
  .notice {
    position: relative;
    right: 8px;
    bottom: 6px;
    height: 15px;
    width: 15px;
    color: #ffffff;
    font-size: 0.6rem;
    background-color: #d64141;
  }
}
</style>
