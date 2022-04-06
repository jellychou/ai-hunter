<script setup>
import ContractAddDialog from "@/components/ContractAddDialog.vue";
import TabMenu from "@/components/TabMenu.vue";
import { defineProps, defineEmits, reactive, ref } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const tabItems = reactive(["開倉", "平倉", "趨勢"]);

const items = reactive([
  { name: "新增開倉", id: 0 },
  { name: "新增平倉", id: 1 },
  { name: "新增趨勢", id: 2 },
]);

const data = reactive([
  {
    value1: "1m/7/21",
    value2: "開倉",
    value3: "MA",
  },
  {
    value1: "1m/7/22",
    value2: "開倉",
    value3: "MA",
  },
]);

// 取消彈窗
const handleClose = () => {
  emit("dialogFeedBack", false);
};

// 送出彈窗
const handleSubmit = () => {
  emit("dialogFeedBack", true);
};

const handleChange = () => {};

const addDialogVisible = ref(false);

const dialogFeedBack = () => {
  addDialogVisible.value = false;
};

const title = ref("");
const tabVal = ref("");

// Tab 切換
const getTabValue = (val) => {
  tabVal.value = val;
};

// 新增
const openAddDialog = (item) => {
  title.value = item.name;
  addDialogVisible.value = true;
};

// 刪除
const deleteList = (item) => {
  console.log(item);
};

const openEditDialog = () => {
  if (tabVal.value === 0) {
    title.value = "修改開倉";
  } else if (tabVal.value === 1) {
    title.value = "修改平倉";
  } else {
    title.value = "修改趨勢";
  }
  addDialogVisible.value = true;
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="BTC 合約自設"
    width="100%"
    fullscreen
    center
    :show-close="false"
    :before-close="handleClose"
  >
    <div class="px-3">
      <div
        class="rounded border border-neutral-900 p-2 flex items-center justify-left mb-2"
      >
        <div class="font-bold text-sm">開倉模式：</div>
        <div class="pl-5 flex items-center">
          <el-checkbox class="login-checkbox" size="large">
            <span class="break-all whitespace-normal text-xs"> 單向建倉 </span>
          </el-checkbox>
          <el-checkbox class="login-checkbox" size="large">
            <span class="break-all whitespace-normal text-xs"> 雙向對沖 </span>
          </el-checkbox>
        </div>
      </div>
      <div class="rounded border border-neutral-900 p-2">
        <div class="font-bold text-sm">基本設定：</div>
        <div class="flex items-center mb-2">
          <div>開倉金額(％)：</div>
          <el-input-number
            class="w-1/4"
            :min="1"
            :max="10"
            controls-position="right"
            @change="handleChange"
          />
          <div class="pl-5 flex items-center">
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs"> 全倉 </span>
            </el-checkbox>
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs"> 逐倉 </span>
            </el-checkbox>
          </div>
        </div>
        <div class="flex items-center mb-2">
          <div>止損(％)：</div>
          <el-input-number
            class="w-1/4"
            :min="1"
            :max="10"
            controls-position="right"
            @change="handleChange"
          />
          <div class="pl-5 flex items-center">
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs">
                開倉及設定止損
              </span>
            </el-checkbox>
          </div>
        </div>
        <div class="flex items-center mb-2">
          <div>止盈(％)：</div>
          <el-input-number
            class="w-1/4"
            :min="1"
            :max="10"
            controls-position="right"
            @change="handleChange"
          />
        </div>
        <div class="flex items-center mb-2">
          <div>浮動止盈(％)：</div>
          <el-input-number
            class="w-1/4"
            :min="1"
            :max="10"
            controls-position="right"
            @change="handleChange"
          />
          <div class="pl-5 flex items-center">
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs"> 停用 </span>
            </el-checkbox>
          </div>
        </div>
        <div class="mb-2">
          <div>止盈區間(％)：</div>
          <div class="flex items-center grid grid-cols-5 gap-3">
            <el-input></el-input>
            <el-input></el-input>
            <el-input></el-input>
            <el-input></el-input>
            <el-input></el-input>
            <el-input></el-input>
            <el-input></el-input>
            <el-input></el-input>
            <el-input></el-input>
            <el-input></el-input>
          </div>
        </div>
        <div class="flex items-center mb-2">
          <div>止盈區間指標：</div>
          <div class="flex items-center">
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs">開盤價</span>
            </el-checkbox>
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs">收盤價</span>
            </el-checkbox>
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs">即時標價</span>
            </el-checkbox>
          </div>
        </div>
        <div class="flex items-center mb-2">
          <div>槓桿倍數：</div>
          <el-input-number
            class="w-1/4"
            :min="1"
            :max="10"
            controls-position="right"
            @change="handleChange"
          />
          <span class="text-xs text-red-600 pl-2"
            >(此功能風險較高，請謹慎使用)</span
          >
        </div>
        <div class="flex items-center mb-2">
          <div>單向開倉：</div>
          <div class="flex items-center">
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs">買入/作多</span>
            </el-checkbox>
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs">賣出/作空</span>
            </el-checkbox>
            <el-checkbox class="login-checkbox" size="large">
              <span class="break-all whitespace-normal text-xs">自動</span>
            </el-checkbox>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div
            class="rounded border border-neutral-900 p-2 flex items-center justify-center font-bold"
            v-for="item in items"
            :key="item.id"
            style="background-color: #505c172e"
            @click="openAddDialog(item)"
          >
            <font-awesome-icon class="pr-2" :icon="['fas', 'plus']" />
            <div>{{ item.name }}</div>
          </div>
        </div>
        <div class="mt-2">
          <TabMenu class="w-1/3" :items="tabItems" @getTabValue="getTabValue" />
          <div class="w-1/2"></div>
        </div>
        <hr class="my-2" />
        <div class="pr-2 overflow-y-scroll" style="height: 15vh">
          <div
            class="flex items-center justify-between mb-1"
            v-for="item in data"
            :key="item.value1"
          >
            <div>{{ item.value1 }}</div>
            <div>{{ item.value2 }}</div>
            <div>{{ item.value3 }}</div>
            <div>
              <span
                @click="deleteList(item)"
                class="text-xs bg-red-600 text-white rounded px-1 mr-1"
                >刪除</span
              >
              <span
                @click="openEditDialog"
                class="text-xs theme-bg-color rounded px-1"
                >修改</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer flex items-center justify-around">
        <el-button class="theme-bg-color w-2/5" @click="handleSubmit"
          >儲存</el-button
        >
        <el-button class="bg-red-600 text-white w-2/5" @click="handleClose"
          >取消</el-button
        >
      </span>
    </template>
  </el-dialog>
  <ContractAddDialog
    :title="title"
    :dialogVisible="addDialogVisible"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped>
.card {
  background-color: #4a551663;
  .member-info-head {
    height: 120px;
    width: 120px;
    object-fit: cover;
  }
}
.financial-card {
  border: 1px solid #b9bbb2;
  border-radius: 5px;
}

.button-footer {
  height: 50px;
}
</style>
