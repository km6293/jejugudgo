import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Login from '@/views/Auth/Login.vue';
import NotFound from '@/views/NotFound.vue';
import { getCookie } from '@/utils/cookies';

const SignUpTerms = () => import('@/views/Auth/SignUpTerms.vue');
const SignUpContent = () => import('@/views/Auth/SignUpContent.vue');
const SignUpID = () => import('@/views/Auth/SignUpID.vue');
const SignUpPassword = () => import('@/views/Auth/SignUpPassword.vue');
const SignUpVerification = () => import('@/views/Auth/SignUpVerification.vue');
const SignUpComplete = () => import('@/views/Auth/SignUpComplete.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { hideNavBar: true },
  },
  {
    path: '/SignUp',
    component: SignUpContent,
    meta: { hideNavBar: true },
    children: [
      {
        path: '',
        name: 'SignUp',
        component: SignUpTerms,
        meta: { progress: 20 },
      },
      {
        path: '',
        name: 'SignUpID',
        component: SignUpID,
        meta: { progress: 40 },
      },
      {
        path: '',
        name: 'SignUpPassword',
        component: SignUpPassword,
        meta: { progress: 60 },
      },
      {
        path: '',
        name: 'SignUpVerification',
        component: SignUpVerification,
        meta: { progress: 80 },
      },
      {
        path: '',
        name: 'SignUpComplete',
        component: SignUpComplete,
        meta: { progress: 100 },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

function isLoggedIn() {
  const user = getCookie('user');
  return !!user;
}

export default router;
