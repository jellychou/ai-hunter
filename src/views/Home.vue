<script setup>
import Marquee from "@/components/Marquee.vue";
import HomeBodyList from "@/components/HomeBodyList.vue";
import DealReport from "@/components/DealReport.vue";
</script>

<template>
  <div class="home_banner block m-auto">
    <img class="home_banner--image" src="@/assets/image/banner.jpg" alt="" />
  </div>
  <Marquee />
  <HomeBodyList />
  <DealReport />
</template>
<style lang="scss" scoped>
.home_banner {
  height: 180px;
  max-height: 100%;
  max-width: 100%;
  &--image {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
}
</style>
