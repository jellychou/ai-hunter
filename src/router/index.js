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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
