<script setup>
import { reactive } from "@vue/reactivity";
import { getValueColor } from "@/utils/value";

const data = reactive([
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
  {
    name: "史迪奇",
    isFollow: false,
    dayWin: 386.41,
    dayWinRate: 24.5,
    isAttention: false,
  },
  {
    name: "蘿拉",
    isFollow: true,
    dayWin: -386.41,
    dayWinRate: 24.5,
    isAttention: true,
  },
]);

const handleChange = () => {};
</script>
<template>
  <div class="rounded border border-neutral-900 p-2 mx-3">
    <div>基本設定</div>
    <div class="flex items-center">
      <div>開倉金額 (USDT)：</div>
      <el-input-number
        class="mx-4 w-1/2"
        :min="1"
        :max="10"
        controls-position="right"
        @change="handleChange"
      />
    </div>
  </div>
  <div class="mt-2">
    <table class="w-full">
      <tr
        class="flex items-center justify-around text-sm border-b border-neutral-900 mx-3"
      >
        <th class="w-1/4 text-left">名稱</th>
        <th class="w-1/5 text-center">設定追隨</th>
        <th class="w-1/3 text-right">24H獲利</th>
        <th class="w-1/4 text-right">24H勝率</th>
        <th class="w-1/6 text-right">關注</th>
      </tr>
      <div class="overflow-scroll px-3" style="height: 62vh">
        <tr
          v-for="item in data"
          :key="item.name"
          class="flex items-center justify-around text-xs"
        >
          <td class="w-1/4 text-left">{{ item.name }}</td>
          <td class="w-1/5 text-center">
            <el-checkbox
              v-model="item.isFollow"
              class="login-checkbox"
              size="large"
            />
          </td>
          <td :class="getValueColor(item.dayWin)" class="w-1/3 text-right">
            {{ item.dayWin }}
          </td>
          <td :class="getValueColor(item.dayWinRate)" class="w-1/4 text-right">
            {{ item.dayWinRate }}%
          </td>
          <td
            class="w-1/6 text-right"
            @click="item.isAttention = !item.isAttention"
          >
            <font-awesome-icon
              v-show="item.isAttention"
              class="text-yellow-500 text-sm"
              :icon="['fas', 'star']"
            />
            <font-awesome-icon
              v-show="!item.isAttention"
              class="text-sm"
              :icon="['far', 'star']"
            />
          </td>
        </tr>
      </div>
    </table>
  </div>
</template>

<style lang="scss" scoped></style>
