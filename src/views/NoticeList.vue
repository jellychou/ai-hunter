<script setup>
import { reactive } from "vue";

const mailList = reactive([
  {
    title: "儲值成功1",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
  },
  {
    title: "儲值成功2",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
  },
  {
    title: "儲值成功3",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
  },
  {
    title: "儲值成功4",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
  },
  {
    title: "儲值成功5",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
  },
  {
    title: "儲值成功6",
    content:
      "Eveniet deserunt dolorem ducimus autem quo totam molestiae tenetur debitis natus eum nemo",
    time: "2022-02-09 10:20",
  },
]);
</script>

<template>
  <h1 class="my-3 text-2xl font-black">通知</h1>
  <div
    class="card flex items-center mb-2 shadow-lg rounded-lg"
    v-for="mail in mailList"
    :key="mail.title"
  >
    <div class="w-2/12">
      <font-awesome-icon class="text-2xl" :icon="['far', 'envelope']" />
    </div>
    <div class="text-left w-5/6 leading-5 p-2">
      <span class="font-bold">{{ mail.title }}</span
      ><br />
      <span>{{ mail.content }}</span
      ><br />
      <span>{{ mail.time }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
