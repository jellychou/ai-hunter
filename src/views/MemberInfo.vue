<script setup>
import { Check } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import MemberInfoPasswordDialog from "@/components/MemberInfoPasswordDialog.vue";
import MemberInfoEditDialog from "@/components/MemberInfoEditDialog.vue";
import MemberInfoBindGoogleDialog from "@/components/MemberInfoBindGoogleDialog.vue";
import MemberInfoSafeDialog from "@/components/MemberInfoSafeDialog.vue";
import MemberInfoMaster from "@/components/MemberInfoMaster.vue";

const form = reactive([]);
const router = useRouter();

const changePassword = ref(false);
const changeSafePassword = ref(false);
const reBindGoogle = ref(false);
const editInfo = ref(false);
const masterArea = ref(false);

const dialogFeedBack = (Boolean) => {
  changePassword.value = false;
  changeSafePassword.value = false;
  reBindGoogle.value = false;
  editInfo.value = false;
  masterArea.value = false;
  if (!Boolean) {
    // confirm button click do some thing!
  }
};
</script>

<template>
  <div class="header flex items-center justify-between px-2">
    <div class="w-1/3 text-left">
      <el-icon size="large" @click="router.push('/')">
        <arrow-left-bold />
      </el-icon>
    </div>
    <div class="w-1/3">會員資訊</div>
    <div class="w-1/3 text-right">
      <span
        class="theme-bg-color text-xs px-2 py-1 rounded"
        @click="masterArea = true"
        >高手專區</span
      >
    </div>
  </div>
  <div class="content-body my-3 px-1">
    <div class="card rounded px-3 py-2 flex">
      <img
        class="member-info-head rounded"
        src="@/assets/image/banner.jpg"
        alt=""
      />
      <div class="text-left text-sm px-2 pt-1">
        <span class="font-bold">史迪奇</span><br />
        <span>等級：LV4</span><br />
        <span>好友：8 人</span><br />
        <div class="flex items-end justify-between">
          <span>專職合約操盤的星際寶貝 想賺錢跟我來就對了</span>
          <el-icon class="text-white text-2xl" @click="editInfo = true"
            ><edit
          /></el-icon>
        </div>
      </div>
    </div>
    <el-form
      class="my-5"
      label-position="top"
      label-width="100px"
      :model="form"
    >
      <el-form-item label="會員帳號" class="mb-2 flex">
        <el-input class="w-4/5" />
        <div class="w-1/5 border rounded border-neutral-900 text-green-500">
          <span>已驗證</span>
          <el-icon><check /></el-icon>
        </div>
      </el-form-item>
      <el-form-item label="會員密碼" class="mb-2 flex">
        <el-input class="w-4/5" />
        <div
          class="w-1/5 border rounded border-neutral-900"
          @click="changePassword = true"
        >
          變更
        </div>
      </el-form-item>
      <el-form-item label="安全密碼" class="mb-2">
        <el-input class="w-4/5" />
        <div
          class="w-1/5 border rounded border-neutral-900"
          @click="changeSafePassword = true"
        >
          變更
        </div>
      </el-form-item>
      <div class="mb-4">
        <div class="text-sm text-left mb-2">語言</div>
        <el-select
          class="w-full"
          v-model="value1"
          multiple
          size="large"
          placeholder="請選擇語言"
        >
          <el-option label="繁體中文" value="shanghai" />
          <el-option label="英文" value="beijing" />
        </el-select>
      </div>
      <el-form-item label="Google Authenticator 驗證" class="mb-2">
        <el-input class="w-4/5">
          <template #suffix>
            <span class="text-green-500">
              已綁定
              <el-icon><check /></el-icon>
            </span>
          </template>
        </el-input>
        <div
          class="w-1/5 border rounded border-neutral-900"
          @click="reBindGoogle = true"
        >
          重新綁定
        </div>
      </el-form-item>
    </el-form>
  </div>
  <MemberInfoPasswordDialog
    :dialogVisible="changePassword"
    @dialogFeedBack="dialogFeedBack"
  />
  <MemberInfoSafeDialog
    :dialogVisible="changeSafePassword"
    @dialogFeedBack="dialogFeedBack"
  />
  <MemberInfoEditDialog
    :dialogVisible="editInfo"
    @dialogFeedBack="dialogFeedBack"
  />
  <MemberInfoBindGoogleDialog
    :dialogVisible="reBindGoogle"
    @dialogFeedBack="dialogFeedBack"
  />
  <MemberInfoMaster
    :dialogVisible="masterArea"
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
</style>
