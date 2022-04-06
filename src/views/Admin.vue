<script setup>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const { state } = useStore();

const tabActive = ref(state.isAdminType);

const handleClick = (val) => {
  store.dispatch("FETCH_ADMIN_TYPE", val);
};
</script>

<template>
  <el-tabs v-model="tabActive" type="card" class="demo-tabs p-2">
    <el-tab-pane label="會員登入" name="login" @click="handleClick('login')">
      <Login />
    </el-tab-pane>
    <el-tab-pane
      label="會員註冊"
      name="register"
      @click="handleClick('register')"
    >
      <Register />
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.demo-tabs {
  .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    height: 100%;
    overflow-y: scroll;
  }
  .el-tabs__nav-wrap {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  ::v-deep(.el-tabs__nav) {
    width: 100%;
    .el-tabs__item {
      width: 50%;
      height: 40px;
      font-size: 1rem;
      line-height: 40px;

      &.is-active {
        background-color: #4a5516;
        color: #ffffff;
      }
      &:nth-child(1) {
        border-top-left-radius: 5px;
      }
      &:nth-child(2) {
        border-top-right-radius: 5px;
      }
    }
  }
}
</style>
