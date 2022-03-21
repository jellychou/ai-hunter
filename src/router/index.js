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
    component: () => import("@/views/NoticeList.vue"),
  },
  {
    path: "/deal",
    name: "Deal",
    component: () => import("@/views/Deal.vue"),
  },
  {
    path: "/scanning",
    name: "Scanning",
    component: () => import("@/views/Scanning.vue"),
  },
  {
    path: "/financial",
    name: "Financial",
    component: () => import("@/views/Financial.vue"),
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: () => import("@/views/Wallet.vue"),
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
