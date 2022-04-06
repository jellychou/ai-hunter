<script setup>
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

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

const goAdmin = (val) => {
  router.push("/admin");
  store.dispatch("FETCH_ADMIN_TYPE", val);
};
</script>

<template>
  <el-dialog
    class="admin-dialog"
    :model-value="dialogVisible"
    width="100%"
    fullscreen
    center
    :before-close="handleClose"
  >
    <div class="px-2 grid justify-items-center content-center">
      <img src="@/assets/image/logo.png" alt="ai hunter" />
      <div class="text-2xl mb-10">需要登入 / 註冊</div>
      <div
        @click="goAdmin('login')"
        class="text-center font-bold rounded py-3 theme-bg-color text-sm w-1/2 mt-10"
      >
        會員登入
      </div>
      <div class="mt-10">新會員註冊帳號</div>
      <div
        @click="goAdmin('register')"
        class="text-center font-bold rounded py-3 bg-yellow-300 text-sm w-1/2"
      >
        立即註冊
      </div>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.admin-dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  animation: fadeIn 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
</style>
