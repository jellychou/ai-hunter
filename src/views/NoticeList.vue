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
      <div class="mr-2 theme-bg-color p-2 rounded text-sm">全部已讀</div>
      <div class="import-color p-2 rounded text-sm">全部清空</div>
    </div>
  </div>
  <h1 class="my-3 text-2xl font-black">通知</h1>
  <div class="mb-20">
    <div
      class="card flex items-center mb-2 shadow-lg rounded-lg"
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
      <div class="text-left w-5/6 leading-5 p-2">
        <span class="font-bold">{{ mail.title }}</span
        ><br />
        <span>{{ mail.content }}</span
        ><br />
        <span>{{ mail.time }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
