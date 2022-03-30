<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();
const cardList = reactive([
  {
    title: "高手排行",
    path: "/masterSort",
  },
  {
    title: "現貨網格",
    path: "/spotGrid",
  },
  {
    title: "合約交易",
    path: "/contractTrade",
  },
  {
    title: "好友列表",
    path: "/friendList",
  },
  {
    title: "我的錢包",
    path: "/wallet",
  },
  {
    title: "會員資訊",
    path: "/memberInfo",
  },
]);

const goPage = (path) => {
  route.push(path);
};
</script>

<template>
  <div class="home-body-list grid grid-cols-3 gap-3">
    <div
      class="card text-sm text-white flex justify-center items-center"
      v-for="card in cardList"
      :key="card.title"
      @click="goPage(card.path)"
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
