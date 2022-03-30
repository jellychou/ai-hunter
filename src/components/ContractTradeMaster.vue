<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    name: "史迪奇",
    follower: 1429,
    dayWin: 99.32,
    dayWinRate: 99.32,
    memo: "專職合約操盤的星際寶貝 想賺錢跟我來就對了",
  },
  {
    name: "史迪奇",
    follower: 1429,
    dayWin: 99.32,
    dayWinRate: 99.32,
    memo: "專職合約操盤的星際寶貝 想賺錢跟我來就對了",
  },
  {
    name: "史迪奇",
    follower: 1429,
    dayWin: 99.32,
    dayWinRate: 99.32,
    memo: "專職合約操盤的星際寶貝 想賺錢跟我來就對了",
  },
  {
    name: "史迪奇",
    follower: 1429,
    dayWin: 99.32,
    dayWinRate: 99.32,
    memo: "專職合約操盤的星際寶貝 想賺錢跟我來就對了",
  },
  {
    name: "史迪奇",
    follower: 1429,
    dayWin: 99.32,
    dayWinRate: 99.32,
    memo: "專職合約操盤的星際寶貝 想賺錢跟我來就對了",
  },
  {
    name: "史迪奇",
    follower: 1429,
    dayWin: 99.32,
    dayWinRate: 99.32,
    memo: "專職合約操盤的星際寶貝 想賺錢跟我來就對了",
  },
  {
    name: "史迪奇",
    follower: 1429,
    dayWin: 99.32,
    dayWinRate: 99.32,
    memo: "專職合約操盤的星際寶貝 想賺錢跟我來就對了",
  },
  {
    name: "史迪奇",
    follower: 1429,
    dayWin: 99.32,
    dayWinRate: 99.32,
    memo: "專職合約操盤的星際寶貝 想賺錢跟我來就對了",
  },
]);
</script>
<template>
  <div class="px-3" style="height: 76vh; overflow-y: scroll">
    <div
      class="card rounded p-2 flex mb-2"
      v-for="item in data"
      :key="item.name"
    >
      <img
        class="member-info-head rounded"
        src="@/assets/image/banner.jpg"
        alt=""
      />
      <div class="text-left text-sm px-2 pt-1">
        <div class="flex items-center justify-between">
          <span class="font-bold text-black">{{ item.name }}</span>
          <span class="text-black">追隨數：{{ item.follower }}</span>
          <font-awesome-icon
            class="text-yellow-500 text-sm"
            :icon="['fas', 'star']"
          />
          <!-- <font-awesome-icon class="text-sm" :icon="['far', 'star']" /> -->
        </div>
        <div class="flex items-center justify-between text-black">
          <div>
            24H勝率: <span>{{ item.dayWin }}%</span>
          </div>
          <div>
            24H獲利: <span>{{ item.dayWinRate }}%</span>
          </div>
        </div>
        <span class="text-black">{{ item.memo }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #4a551663;
  .member-info-head {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
}
</style>
