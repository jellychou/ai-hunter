<script setup>
import { getValueColor } from "@/utils/value";
import { defineProps, defineEmits, ref, reactive } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const handleClose = () => {
  emit("dialogFeedBack", false);
};

const data = reactive([
  {
    name: "BTC",
    status: 1, // 1作多 0作空
    date: "2022/10/22 20:09:30",
    number: 0.095,
    lever: 1,
    price: 2123.09,
    win: 100.0,
    fuel: 20.0,
  },
  {
    name: "ETH",
    status: 0, // 1作多 0作空
    date: "2022/10/22 20:09:30",
    number: 0.095,
    lever: 1,
    price: 2123.09,
    win: 100.0,
    fuel: 20.0,
  },
  {
    name: "BTC2",
    status: 1, // 1作多 0作空
    date: "2022/10/22 20:09:30",
    number: 0.095,
    lever: 1,
    price: 2123.09,
    win: 100.0,
    fuel: 20.0,
  },
]);

const isDetailOpen = ref("");

const openDetail = (num) => {
  if (num === isDetailOpen.value) {
    return (isDetailOpen.value = "");
  }
  isDetailOpen.value = num;
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="合約自設交易紀錄"
    width="100%"
    fullscreen
    center
    :before-close="handleClose"
  >
    <div class="dialog-body">
      <div
        v-for="item in data"
        :key="item.name"
        class="rounded border border-neutral-900 mx-2 px-2 pt-2 mb-2"
      >
        <div class="flex items-center justify-between text-sm">
          <span>{{ item.name }}/USDT</span>
          <span :class="item.status ? 'text-green-500' : 'text-red-600'">{{
            item.status ? "作多" : "做空"
          }}</span>
          <span>時間：{{ item.date }} </span>
        </div>
        <div :class="isDetailOpen === item.name ? 'isOpen' : 'isClose'">
          <div
            :class="isDetailOpen === item.name ? 'isShowText' : 'isNoneText'"
            class="flex items-center justify-between text-xs"
          >
            <span>數量：{{ item.number }}</span>
            <span>槓桿：{{ item.lever }}</span>
            <span>價格：{{ item.price }}</span>
            <span :class="getValueColor(item.win)"
              >獲利：{{ item.win }}/USDT</span
            >
          </div>
          <div
            :class="isDetailOpen === item.name ? 'isShowText' : 'isNoneText'"
            class="font-bold text-sm"
          >
            燃料費：{{ item.fuel }}/USDT
          </div>
        </div>
        <div class="text-center" @click="openDetail(item.name)">
          <font-awesome-icon
            v-if="isDetailOpen === item.name"
            class="relative text-2xl absolute theme-text-color"
            :icon="['fas', 'caret-up']"
          />
          <font-awesome-icon
            v-else
            class="relative text-2xl absolute theme-text-color"
            :icon="['fas', 'caret-down']"
          />
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.dialog-body {
  height: 90vh;
  overflow-y: scroll;
}

.isOpen {
  height: 45px;
  transition: height 0.3s;
}

.isClose {
  height: 0;
  transition: height 0.3s;
}

.isShowText {
  animation: fadeIn 0.6s;
}

.isNoneText {
  display: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 10;
  }
}
</style>
