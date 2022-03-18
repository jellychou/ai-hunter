<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LoadingPage from "@/components/LoadingPage.vue";
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
</script>
<template>
  <LoadingPage />
  <Header />
  <div class="content mx-3">
    <router-view></router-view>
  </div>
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
  position: relative;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
  height: 100%;
  overflow-y: scroll;
}
</style>
