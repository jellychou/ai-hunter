<script setup>
import { getValueColor } from "@/utils/value";
import { defineProps } from "vue";

defineProps({
  itemData: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <table class="w-full">
    <tr
      class="flex items-center justify-around text-sm border-b border-neutral-900 mx-3"
    >
      <th class="w-1/4 text-left">名稱</th>
      <th class="w-1/5 text-center">市場</th>
      <th class="w-1/4 text-right">追隨人數</th>
      <th class="w-1/3 text-right">24H排名</th>
      <th class="w-1/6 text-right">關注</th>
    </tr>
    <div class="overflow-scroll px-3 table-content">
      <tr
        v-for="item in itemData"
        :key="item.name"
        class="flex items-center justify-around text-sm py-1"
      >
        <td class="w-1/4 text-left">{{ item.name }}</td>
        <td class="w-1/5 text-center">{{ item.market }}</td>
        <td class="w-1/4 text-right">
          {{ item.follower }}
        </td>
        <td class="w-1/3 text-right" :class="getValueColor(item.daySort)">
          {{ item.daySort }}%
          <font-awesome-icon
            v-if="item.daySort > 0"
            class="text-sm"
            :icon="['fas', 'arrow-up']"
          />
          <font-awesome-icon
            v-if="item.daySort < 0"
            class="text-sm"
            :icon="['fas', 'arrow-down']"
          />
        </td>
        <td class="w-1/6 text-right" @click="item.isFollow = !item.isFollow">
          <font-awesome-icon
            v-show="item.isFollow"
            class="text-yellow-500 text-sm"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            v-show="!item.isFollow"
            class="text-sm"
            :icon="['far', 'star']"
          />
        </td>
      </tr>
    </div>
  </table>
</template>

<style lang="scss" scoped></style>
