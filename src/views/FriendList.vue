<script setup>
import FriendAddDialog from "@/components/FriendAddDialog.vue";
import { Search, CirclePlusFilled } from "@element-plus/icons-vue";
import { ref } from "vue";

const dialogVisible = ref(false);

const dialogFeedBack = () => {
  dialogVisible.value = false;
};

const data = ref([
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
  {
    name: "BBB",
    level: "LV2",
    email: "bbb@yahoo.com",
    recharge: 20,
    total: 120,
  },
]);
</script>

<template>
  <div class="px-1">
    <el-input :prefix-icon="Search" placeholder="搜尋名稱 / 等級 / 信箱" />
    <div class="flex items-center justify-between my-3 px-2">
      <div class="text-gray-400 text-sm">名稱 / 等級</div>
      <div class="text-gray-400 text-sm">充值人數 / 推薦總數</div>
    </div>
    <el-icon
      @click="dialogVisible = true"
      class="add-icon text-4xl theme-text-color"
      ><circle-plus-filled
    /></el-icon>
    <div class="friend-list__body px-2 overflow-y-scroll">
      <div
        class="flex items-center justify-between mb-2"
        v-for="item in data"
        :key="item.name"
      >
        <div class="flex">
          <img
            class="friend-list__head rounded-full"
            src="../assets/image/banner.jpg"
            alt=""
          />
          <div class="text-left px-2">
            <div class="font-bold">
              {{ item.name }} /
              <span :class="{ 'text-yellow-500 text-sm': !item.level }">
                {{ item.level ? item.level : "未啟用" }}</span
              >
            </div>
            <div>{{ item.email }}</div>
          </div>
        </div>
        <div>
          <span>{{ item.recharge }}/{{ item.total }}</span>
        </div>
      </div>
    </div>
  </div>
  <FriendAddDialog
    :dialogVisible="dialogVisible"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped>
.friend-list__head {
  height: 50px;
  width: 50px;
}

.friend-list__body {
  height: calc(100vh - 180px);
}

.add-icon {
  position: fixed;
  bottom: 70px;
  right: 20px;
}
</style>
