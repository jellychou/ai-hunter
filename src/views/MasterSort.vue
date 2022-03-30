<script setup>
import TabMenu from "../components/TabMenu.vue";
import MasterSortTable from "../components/MasterSortTable.vue";
import MasterWinTable from "../components/MasterWinTable.vue";
import { reactive, ref } from "vue";

const tabItems = reactive([
  "熱門高手",
  "現貨高手",
  "合約高手",
  "最高勝率",
  "最高獲利",
]);

const showWinTable = ref("");

const getTabValue = (val) => {
  showWinTable.value = val;
};

const data = reactive([
  {
    name: "史迪奇",
    isFollow: false,
    follower: 1680,
    daySort: -0.52,
    market: "合約",
  },
  {
    name: "蘿拉",
    isFollow: true,
    follower: 1680,
    daySort: 0.52,
    market: "合約",
  },
]);
</script>

<template>
  <div class="text-xl font-bold mb-2">24H獵人高手百大排行榜</div>
  <TabMenu :items="tabItems" @getTabValue="getTabValue" />
  <div class="mt-2 rounded border border-neutral-900">
    <transition name="el-fade-in-linear">
      <MasterWinTable
        v-if="showWinTable === 3 || showWinTable === 4"
        :itemData="data"
      />
      <MasterSortTable v-else :itemData="data" />
    </transition>
  </div>
</template>

<style lang="scss">
.table-content {
  height: calc(100vh - 238px);
}
</style>
