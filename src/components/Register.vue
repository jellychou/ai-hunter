<script setup>
import { reactive, ref } from "vue";
import { Avatar, Lock, Message } from "@element-plus/icons-vue";

const form = reactive({
  account: "",
  password: "",
  email: "",
  safePassword: "",
  isCheck_1: "",
  isCheck_2: "",
});

const checkPassword = ref("");
const checkSafePassword = ref("");
</script>
<template>
  <div class="register">
    <h1 class="register-title mb-1">註冊會員</h1>
    <el-form label-width="100px" :model="form" style="max-width: 460px">
      <el-input
        class="mb-2"
        v-model="form.account"
        placeholder="輸入帳號"
        size="large"
        type="text"
      >
        <template #prefix>
          <el-icon :class="{ isValid: form.account }"><avatar /></el-icon>
        </template>
      </el-input>
      <el-input
        class="mb-2"
        placeholder="輸入密碼"
        size="large"
        type="password"
        v-model="form.password"
      >
        <template #prefix>
          <el-icon :class="{ isValid: form.password }"><lock /></el-icon>
        </template>
      </el-input>
      <el-input
        class="mb-2"
        placeholder="確認密碼"
        size="large"
        type="password"
        v-model="checkPassword"
      >
        <template #prefix>
          <el-icon :class="{ isValid: checkPassword }"><lock /></el-icon>
        </template>
      </el-input>
      <el-input
        class="mb-2"
        placeholder="設定並驗證電子郵件信箱"
        size="large"
        type="email"
        v-model="form.email"
      >
        <template #prefix>
          <el-icon :class="{ isValid: form.email }"><message /></el-icon>
        </template>
      </el-input>
      <el-input
        class="mb-2"
        placeholder="安全密碼設定"
        size="large"
        type="password"
        v-model="form.safePassword"
      >
        <template #prefix>
          <el-icon :class="{ isValid: form.safePassword }"><lock /></el-icon>
        </template>
      </el-input>
      <el-input
        class="mb-2"
        placeholder="確認安全密碼"
        size="large"
        type="password"
        v-model="checkSafePassword"
      >
        <template #prefix>
          <el-icon :class="{ isValid: checkSafePassword }"><lock /></el-icon>
        </template>
      </el-input>
    </el-form>
    <div class="register-tips my-3 px-3 flex">
      <span class="pr-2">※</span>
      <span>
        注意，安全密碼，於您進行出金提領時使用，設定完成後請妥善保存，勿告知其他人士。
      </span>
    </div>
    <div class="d-block text-left mt-2 px-3">
      <el-checkbox
        class="login-checkbox"
        v-model="form.isCheck_1"
        label="我已經詳讀會員條款。"
        size="large"
      />
      <el-checkbox
        class="login-checkbox"
        v-model="form.isCheck_2"
        label="我認同並同意所有會員條款。"
        size="large"
      />
    </div>
    <div class="my-5 flex item-center justify-around">
      <el-button class="register-button__register w-2/5" size="large"
        >註冊加入</el-button
      >
      <el-button class="register-button__google w-2/5 ml-0" size="large"
        >使用 Google 登入</el-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register {
  border-radius: 5px;
  padding: 1rem;
  animation: fadeIn 1s;
  .register-title {
    font-size: 1.5rem;
  }

  .register-tips {
    font-size: 0.8rem;
    text-align: left;
    line-height: 1;
    color: red;
  }

  .register-button__register {
    background-color: #4a5516;
    color: #ffffff;
  }

  .register-button__google {
    background-color: rgb(214, 65, 65);
    color: #ffffff;
  }
  
  .isValid {
    color: #4a5516;
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
