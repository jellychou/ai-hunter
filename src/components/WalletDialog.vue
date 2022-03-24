<script setup>
import WalletDialogList from "./WalletDialogList.vue";
import WalletDialogStatus from "./WalletDialogStatus.vue";
import WalletDialogWithdraw from "./WalletDialogWithdraw.vue";
import WalletDialogRecharge from "./WalletDialogRecharge.vue";
import { defineProps, defineEmits, ref, reactive } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

const activeName = ref(0);

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const handleClose = () => {
  emit("dialogFeedBack", false);
};

const itemData = reactive([
  {
    list_1: "提現",
    list_2: "2020/01/13 00:00:00",
    list_3: 100,
    list_4: "TRC",
    list_5: "已受理",
  },
  {
    list_1: "提現",
    list_2: "2020/01/13 00:00:00",
    list_3: 100,
    list_4: "TRC",
    list_5: "已受理",
  },
]);

const itemData_2 = reactive([
  {
    list_1: "提現",
    list_2: "2020/01/13 00:00:00",
    list_3: "USDT",
    list_4: 100,
  },
  {
    list_1: "提現",
    list_2: "2020/01/13 00:00:00",
    list_3: "USDT",
    list_4: 100,
  },
]);

// const handleClick = () => {
//   console.log(123);
// };
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="帳務明細"
    width="100%"
    fullscreen
    center
    :before-close="handleClose"
  >
    <ul class="grid grid-cols-3 text-center px-2">
      <li
        :class="activeName === 0 ? 'border-active' : 'border-not-active'"
        class="p-2"
        @click="activeName = 0"
      >
        充值/提現狀態
      </li>
      <li
        :class="activeName === 1 ? 'border-active' : 'border-not-active'"
        class="p-2 theme-bg-color text-white"
        @click="activeName = 1"
      >
        歷史紀錄
      </li>
      <li
        :class="activeName === 2 ? 'border-active' : 'border-not-active'"
        class="p-2"
        @click="activeName = 2"
      >
        獎勵紀錄
      </li>
    </ul>
    <div class="pt-1">
      <WalletDialogStatus :itemData="itemData" v-if="activeName === 0" />
      <WalletDialogList :itemData="itemData_2" v-if="activeName === 1" />
      <WalletDialogList :itemData="itemData_2" v-if="activeName === 2" />
    </div>
  </el-dialog>
  <WalletDialogWithdraw />
  <WalletDialogRecharge />
</template>

<style lang="scss" scoped>
.border-active {
  border: 1px solid #4a5516;
  border-bottom: none;
  color: #4a5516;
  background-color: #ffffff;
}

.border-not-active {
  border: 1px solid #4a5516;
  background-color: #4a5516;
  color: #ffffff;
}
</style>
