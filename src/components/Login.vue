<script setup>
import LoginForgetDialog from "./LoginForgetDialog.vue";
import { ref } from "vue";

const form = ref({
  account: "",
  password: "",
  isRemember: "",
});

const dialogVisible = ref(false);

const dialogFeedBack = (Boolean) => {
  if (!Boolean) return (dialogVisible.value = false);
  // confirm button click do some thing!
};

</script>
<template>
  <div class="login">
    <h1 class="login-title mb-1">登入</h1>
    <el-input
      v-model="form.account"
      size="large"
      class="login-input mb-3"
      placeholder="輸入帳號"
      type="text"
    />
    <el-input
      v-model="form.password"
      size="large"
      class="mb-2"
      placeholder="輸入密碼"
      type="password"
    />
    <div class="d-block text-right">
      <a
        class="text-blue-700 underline text-xs"
        href="javascript:;"
        @click="dialogVisible = true;"
      >
        忘記密碼?
      </a>
    </div>
    <div class="d-block text-left">
      <el-checkbox
        class="login-checkbox text-sm"
        v-model="form.isRemember"
        label="記住帳號"
        size="large"
      />
    </div>
    <el-button class="login-button" size="large">登入</el-button>
  </div>
  <LoginForgetDialog
    :dialogVisible="dialogVisible"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped>
.login {
  border-radius: 5px;
  padding: 1rem;
  animation: fadeIn 1s;

  .login-title {
    font-size: 1.5rem;
  }
  
  .login-button {
    background-color: #4a5516;
    color: #ffffff;
    height: 50px;
    width: 70%;
    margin: 2rem 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
