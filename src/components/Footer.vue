<script setup></script>

<template>
  <div class="footer">
    <ul class="footer-list text-white grid grid-cols-5 gap-5">
      <li class="grid justify-items-center content-center">
        <el-icon><house /></el-icon>
        <span>首頁</span>
      </li>
      <li class="grid justify-items-center content-center">
        <el-icon><shop /></el-icon>
        <span>交易</span>
      </li>
      <li class="grid justify-items-center content-center">
        <el-icon><printer /></el-icon>
        <span>掃描</span>
      </li>
      <li class="grid justify-items-center content-center">
        <el-icon><coin /></el-icon>
        <span>理財</span>
      </li>
      <li class="grid justify-items-center content-center">
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
  height: 50px;
  width: 100%;
  background-color: #4a5516;
  .footer-list {
    height: 100%;
  }
}
</style>
