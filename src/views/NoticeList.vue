<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const mailList = reactive([
  {
    title: "儲值成功1",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
    isOpen: 0,
  },
  {
    title: "儲值成功2",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
    isOpen: 0,
  },
  {
    title: "儲值成功3",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
    isOpen: 1,
  },
  {
    title: "儲值成功4",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
    isOpen: 1,
  },
  {
    title: "儲值成功5",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
    isOpen: 0,
  },
  {
    title: "儲值成功6",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
    isOpen: 0,
  },
]);
</script>

<template>
  <div class="header flex items-center justify-between px-2">
    <el-icon size="large" @click="router.push('/')">
      <arrow-left-bold />
    </el-icon>
    <div class="flex">
      <div class="mr-2 theme-bg-color px-2 py-1 rounded text-sm">全部已讀</div>
      <div class="import-color px-2 py-1 rounded text-sm">全部清空</div>
    </div>
  </div>
  <div class="my-2">
    <div
      class="flex items-center mb-2 border-b"
      v-for="mail in mailList"
      :key="mail.title"
    >
      <div class="w-2/12">
        <font-awesome-icon
          v-if="mail.isOpen"
          class="text-2xl"
          :icon="['far', 'envelope-open']"
        />
        <font-awesome-icon
          v-else
          class="text-2xl"
          :icon="['far', 'envelope']"
        />
      </div>
      <div class="text-left w-5/6 py-1 pr-2">
        <div class="flex items-center justify-between">
          <div class="font-bold">{{ mail.title }}</div>
          <div class="text-xs">{{ mail.time }}</div>
        </div>
        <div class="text-sm leading-none">{{ mail.content }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
