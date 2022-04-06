<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    name: "BTC/USDT 永續",
    num_1: "0.0000",
    num_2: "0.0155",
    price: "3300.00",
    title: "市場止損/買入",
    type: 1,
    date: "2020-02-12 21:09:59",
    trigger: "最新價格 >= 3269.79",
    reduce: 0,
  },
]);
</script>

<template>
  <div class="overflow-y-scroll" style="height:25vh">
    <div v-for="item in data" :key="item.name" class="mt-2">
      <div class="flex items-center justify-between">
        <div
          class="w-1/4 text-xs"
          :class="item.type ? 'text-green-500' : 'text-red-500'"
        >
          {{ item.title }}
        </div>
        <div class="w-3/4 flex items-center justify-between">
          <div class="font-bold">{{ item.name }}</div>
          <div class="text-xs">{{ item.date }}</div>
        </div>
      </div>
      <div class="flex items-star justify-center">
        <div class="w-1/4 mt-2">
          <el-progress
            :width="60"
            type="circle"
            :percentage="20"
            :color="item.type ? '#2dbd88' : '#dc2625'"
          />
        </div>
        <div class="w-3/4 pt-2">
          <div class="text-left text-xs">
            <div>數量：{{ item.num_1 }}/{{ item.num_2 }}</div>
            <div>價格：{{ item.price }}</div>
            <div>觸發條件：{{ item.trigger }}</div>
            <div>只減倉：{{ item.reduce ? "是" : "否" }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
