import { createRouter, createWebHashHistory } from "vue-router";
import Base from "@/views/KalcBase/Base.vue";
import Complement from "@/views/KalcBase/Complement.vue";
import DigitalData from "@/views/KalcBase/DigitalData.vue";
import Encrytion from "@/views/KalcBase/Encrytion.vue";
import Bit from "@/views/KalcBase/Bit.vue";
import Subnet from "@/views/KalcBase/Subnet.vue";
import Memory from "@/views/KalcBase/Memory.vue";


const routes = [
  {
    path: "/",
    redirect: { name: "base" }
  },
  {
    path: "/Base",
    name: "base",
    meta: { title: "진법 계산기" },
    component: Base,
  },
  {
    path: "/Complement",
    name: "complement",
    meta: { title: "보수 계산기" },
    component: Complement,
  },
  {
    path: "/DigitalData",
    name: "digitaldata",
    meta: { title: "디지털데이터 표현" },
    component: DigitalData,
  },
  {
    path: "/Encrytion",
    name: "encrytion",
    meta: { title: "암호화" },
    component: Encrytion,
  },
  {
    path: "/Bit",
    name: "bit",
    meta: { title: "비트 연산" },
    component: Bit,
  },
  {
    path: "/Subnet",
    name: "subnet",
    meta: { title: "서브넷마스크 연산" },
    component: Subnet,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;