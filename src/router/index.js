import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/Admin.vue"),
  },
  {
    path: "/noticeList",
    name: "NoticeList",
    component: () => import("@/views/NoticeList.vue"), // 通知
  },
  {
    path: "/masterSort",
    name: "MasterSort",
    component: () => import("@/views/MasterSort.vue"), // 高手排行
  },
  {
    path: "/deal",
    name: "Deal",
    component: () => import("@/views/Deal.vue"), // 交易
  },
  {
    path: "/scanning",
    name: "Scanning",
    component: () => import("@/views/Scanning.vue"), // 掃描
  },
  {
    path: "/financial",
    name: "Financial",
    component: () => import("@/views/Financial.vue"), // 理財
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: () => import("@/views/Wallet.vue"), // 我的錢包
  },
  {
    path: "/contractTrade",
    name: "ContractTrade",
    component: () => import("@/views/ContractTrade.vue"), // 合約交易
  },
  {
    path: "/friendList",
    name: "FriendList",
    component: () => import("@/views/FriendList.vue"), // 好友列表
  },
  {
    path: "/memberInfo",
    name: "MemberInfo",
    component: () => import("@/views/MemberInfo.vue"), // 會員資訊
  },
  {
    path: "/spotGrid",
    name: "SpotGrid",
    component: () => import("@/views/SpotGrid.vue"), //現貨網格
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
