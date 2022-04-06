<script setup>
import Header from "@/components/Header.vue";
import HeaderLogo from "@/components/HeaderLogo.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import Footer from "@/components/Footer.vue";
import LoadingPage from "@/components/LoadingPage.vue";
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();
// import { onMounted } from "vue";
// import { useStore } from "vuex";

// const { commit } = useStore();

// commit("SET_STAR_PAGE_STATUS", true);
// onMounted(() => {
//   window.onload = function () {
//     if (document.readyState === "complete") {
//       setTimeout(() => {
//         commit("SET_STAR_PAGE_STATUS", false);
//       }, 3000);
//     }
//   };
// });

const getPageHeaderLogo = computed(() => {
  const showHeader = [
    "/deal",
    "/scanning",
    "/financial",
    "/wallet",
    "/memberInfo",
  ];
  const isShow = showHeader.some((e) => {
    return e === router.currentRoute.value.path;
  });
  return isShow;
});

const getPageHeaderTitle = computed(() => {
  const showHeader = ["/masterSort", "/contractTrade", "/friendList"];
  const isShow = showHeader.some((e) => {
    return e === router.currentRoute.value.path;
  });
  return isShow;
});

const getOverflow = computed(() => {
  const showHeader = ["/financial", "/noticeList", "/wallet", "/"];
  const isShow = showHeader.some((e) => {
    return e === router.currentRoute.value.path;
  });
  return isShow;
});
</script>
<template>
  <LoadingPage />
  <Header v-if="router.currentRoute.value.path === '/'" />
  <HeaderLogo v-else-if="getPageHeaderLogo" />
  <HeaderTitle v-else-if="getPageHeaderTitle" />
  <transition name="el-fade-in-linear">
    <div
      class="px-2 mt-2 content"
      :class="{
        'content-overflow': getOverflow,
        'content-admin': router.currentRoute.value.path === '/admin',
      }"
    >
      <router-view></router-view>
    </div>
  </transition>
  <Footer />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.content {
  position: fixed;
  top: 45px;
  bottom: 45px;
  left: 0;
  right: 0;
}

.content-admin {
  position: fixed;
  top: 0;
  bottom: 45px;
  left: 0;
  right: 0;
}

.content-overflow {
  overflow-y: auto;
}
</style>
