import { createRouter, createWebHashHistory } from "vue-router";
import KalcBase from "@/views/KalcBase/KalcBase.vue";


const routes = [
  {
    path: "/Base",
    name: "base",
    meta: { title: "진법 계산기" },
    component: KalcBase,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;