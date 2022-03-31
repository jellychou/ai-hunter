<script setup>
import MemberInfoMasterQua from "@/components/MemberInfoMasterQua.vue";
import MemberInfoMasterFollow from "@/components/MemberInfoMasterFollow.vue";
import { defineProps, defineEmits, ref } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const activeName = ref("qualifications");

const handleClose = () => {
  emit("dialogFeedBack", false);
};

const handleClick = () => {
  console.log(123);
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="高手專區"
    width="100%"
    fullscreen
    center
    :before-close="handleClose"
  >
    <div class="content-body my-3 px-3">
      <div class="card rounded px-3 py-2 flex">
        <img
          class="member-info-head rounded"
          src="@/assets/image/banner.jpg"
          alt=""
        />
        <div class="text-left text-sm pl-2 pt-1">
          <div class="flex items-center justify-between">
            <div class="font-bold">史迪奇</div>
            <div>追隨數：<span>10</span></div>
          </div>
          <div>24H勝率：<span>99.32%</span></div>
          <div>24H獲利：<span>99.32%</span></div>

          <div class="flex items-end justify-between">
            <span class="font-bold text-sm"
              >專職合約操盤的星際寶貝 想賺錢跟我來就對了</span
            >
            <el-icon class="text-white text-2xl" @click="editInfo = true"
              ><edit
            /></el-icon>
          </div>
        </div>
      </div>
      <div class="mt-3 mb-5">
        <div class="grid grid-cols-2 gap-2">
          <div>
            <div class="text-left">現貨帶單收入</div>
            <div class="financial-card text-left py-3 px-2">
              <div class="text-gray-400 text-xs mb-2">總計(USDT)</div>
              <div class="text-green-500 text-2xl font-500">0.00</div>
            </div>
          </div>
          <div>
            <div class="text-left">合約帶單收入</div>
            <div class="financial-card text-left py-3 px-2">
              <div class="text-gray-400 text-xs mb-2">總計(USDT)</div>
              <div class="text-green-500 text-2xl font-500">0.00</div>
            </div>
          </div>
        </div>
        <el-tabs
          v-model="activeName"
          type="card"
          class="demo-tabs p-2"
          @tab-click="handleClick"
        >
          <el-tab-pane label="資格狀態" name="qualifications">
            <MemberInfoMasterQua />
          </el-tab-pane>
          <el-tab-pane label="追隨狀態" name="follow">
            <MemberInfoMasterFollow />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
