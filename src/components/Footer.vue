<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goPage = (val) => {
  router.push(val);
};

const thisRouter = ref("");

watch(
  () => router,
  () => {
    thisRouter.value = router.currentRoute.value.path;
  },
  {
    deep: true,
  }
);
</script>

<template>
  <div class="footer">
    <ul class="footer-list text-white grid grid-cols-5 gap-5">
      <li
        @click="goPage('/')"
        :class="[
          'grid',
          'justify-items-center',
          'content-center',
          'text-sm',
          { 'text-yellow-400': thisRouter === '/' },
        ]"
      >
        <el-icon><house /></el-icon>
        <span>首頁</span>
      </li>
      <li
        @click="goPage('/deal')"
        :class="[
          'grid',
          'justify-items-center',
          'content-center',
          'text-sm',
          { 'text-yellow-400': thisRouter === '/deal' },
        ]"
      >
        <el-icon><shop /></el-icon>
        <span>交易</span>
      </li>
      <li
        @click="goPage('/scanning')"
        :class="[
          'grid',
          'justify-items-center',
          'content-center',
          'text-sm',
          { 'text-yellow-400': thisRouter === '/scanning' },
        ]"
      >
        <el-icon><printer /></el-icon>
        <span>掃描</span>
      </li>
      <li
        @click="goPage('/financial')"
        :class="[
          'grid',
          'justify-items-center',
          'content-center',
          'text-sm',
          { 'text-yellow-400': thisRouter === '/financial' },
        ]"
      >
        <el-icon><coin /></el-icon>
        <span>理財</span>
      </li>
      <li
        @click="goPage('/wallet')"
        :class="[
          'grid',
          'justify-items-center',
          'content-center',
          'text-sm',
          { 'text-yellow-400': thisRouter === '/wallet' },
        ]"
      >
        <el-icon><shopping-bag /></el-icon>
        <span>錢包</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 45px;
  width: 100%;
  background-color: #4a5516;
  .footer-list {
    height: 100%;
  }
}
</style>
