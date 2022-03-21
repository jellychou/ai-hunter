<script setup>
import WalletDialogList from "./WalletDialogList.vue";
import WalletDialogStatus from "./WalletDialogStatus.vue";
import { defineProps, defineEmits, ref, reactive } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

const activeName = ref("recharge");

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
  {
    list_1: "提現",
    list_2: "2020/01/13 00:00:00",
    list_3: "USDT",
    list_4: 100,
  },
]);
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="帳務明細"
    width="96%"
    center
    :before-close="handleClose"
  >
    <el-tabs
      v-model="activeName"
      type="card"
      class="mx-2"
      @tab-click="handleClick"
    >
      <el-tab-pane class="tab-pane mb-2" label="充值/提現狀態" name="recharge">
        <WalletDialogStatus :itemData="itemData" />
      </el-tab-pane>
      <el-tab-pane class="tab-pane mb-2" label="歷史紀錄" name="history">
        <WalletDialogList :itemData="itemData_2" />
      </el-tab-pane>
      <el-tab-pane class="tab-pane mb-2" label="獎勵紀錄" name="record">
        <WalletDialogList :itemData="itemData_2" />
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<style lang="scss" scoped>
.tab-pane {
  height: 50vh;
}
</style>
