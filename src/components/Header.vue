<script setup>
import { useRouter } from "vue-router";
import HeaderHome from "./HeaderHome.vue";
import HeaderNotice from "./HeaderNotice.vue";
import { computed } from "vue";

const router = useRouter();
const getNoticeHeader = computed(() => {
  const showHeader = ["/noticeList"];
  const isShow = showHeader.some((e) => {
    return e === router.currentRoute.value.path;
  });
  return isShow;
});
</script>

<template>
  <HeaderHome v-if="router.currentRoute.value.path === '/'" />
  <HeaderNotice v-if="getNoticeHeader" />
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #ffffff;
}
</style>
