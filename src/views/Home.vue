<script setup>
import Marquee from '@/components/Marquee.vue'
import HomeBodyList from '@/components/HomeBodyList.vue'
import DealReport from '@/components/DealReport.vue'
</script>

<template>
  <div class="home mt-2">
    <div class="home_banner block m-auto">
      <img class="home_banner--image" src="@/assets/image/banner.jpg" alt="" />
    </div>
    <Marquee />
    <HomeBodyList />
    <DealReport />
  </div>
</template>
<style lang="scss" scoped>
.home {
  .home_banner {
    height: 180px;
    max-height: 100%;
    max-width: 100%;
    border: 1px solid #4a5516;
    border-radius: 5px;
    &--image {
      height: 100%;
      width: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
  }
}
</style>
