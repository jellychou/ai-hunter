<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRouter();
const store = useStore();
const cardList = reactive([
  {
    title: "高手排行",
    path: "/masterSort",
    params: "masterSort",
  },
  {
    title: "現貨網格",
    path: "/contractTrade",
    params: "sportGrid",
  },
  {
    title: "合約交易",
    path: "/contractTrade",
    params: "contractTrade",
  },
  {
    title: "好友列表",
    path: "/friendList",
    params: "friendList",
  },
  {
    title: "我的錢包",
    path: "/wallet",
    params: "wallet",
  },
  {
    title: "會員資訊",
    path: "/memberInfo",
    params: "memberInfo",
  },
]);

const goPage = (item) => {
  route.push(item.path);
  store.dispatch("FETCH_PAGE_TITLE", item.params);
};
</script>

<template>
  <div class="home-body-list grid grid-cols-3 gap-3">
    <div
      class="card text-sm text-white flex justify-center items-center"
      v-for="card in cardList"
      :key="card.title"
      @click="goPage(card)"
    >
      {{ card.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-body-list {
  .card {
    background-color: #e7bc2b;
    height: 60px;
    border-radius: 5px;
  }
}
</style>
