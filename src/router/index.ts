import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Login from '@/views/Auth/Login.vue';
import NotFound from '@/views/NotFound.vue';
import { getCookie } from '@/utils/cookies';

const TabContainer = () => import('@/components/tabBar/TabContainer.vue');

const SignUpTerms = () => import('@/views/Auth/SignUpTerms.vue');
const SignUpContent = () => import('@/views/Auth/SignUpContent.vue');
const SignUpID = () => import('@/views/Auth/SignUpID.vue');
const SignUpPassword = () => import('@/views/Auth/SignUpPassword.vue');
const SignUpVerification = () => import('@/views/Auth/SignUpVerification.vue');
const SignUpComplete = () => import('@/views/Auth/SignUpComplete.vue');

const FindIDContent = () => import('@/views/Auth/FindIDContent.vue');
const FindIDByPhone = () => import('@/views/Auth/FindIDByPhone.vue');
const FindIDByEmail = () => import('@/views/Auth/FindIDByEmail.vue');
const FindIDResult = () => import('@/views/Auth/FindIDResult.vue');

const FindPasswordContent = () =>
  import('@/views/Auth/FindPasswordContent.vue');
const FindPasswordByPhone = () =>
  import('@/views/Auth/FindPasswordByPhone.vue');
const FindPasswordByEmail = () =>
  import('@/views/Auth/FindPasswordByEmail.vue');
const FindPasswordReset = () => import('@/views/Auth/FindPasswordReset.vue');
const FindPasswordComplete = () =>
  import('@/views/Auth/FindPasswordComplete.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { hideAppBar: true },
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { hideAppBar: true },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { hideNavBar: true, title: '로그인', homeRoute: 'home' },
  },
  {
    path: '/signup',
    component: SignUpContent,
    meta: { hideNavBar: true, homeRoute: 'login', title: '회원가입' },
    redirect: { name: 'signup-terms' },
    children: [
      {
        path: '/terms',
        name: 'signup-terms',
        component: SignUpTerms,
        meta: { progress: 20 },
      },
      {
        path: '/id',
        name: 'signup-id',
        component: SignUpID,
        meta: { progress: 40 },
      },
      {
        path: '/password',
        name: 'signup-password',
        component: SignUpPassword,
        meta: { progress: 60 },
      },
      {
        path: '/verification',
        name: 'signup-verification',
        component: SignUpVerification,
        meta: { progress: 80 },
      },
      {
        path: '/complete',
        name: 'signup-complete',
        component: SignUpComplete,
        meta: { progress: 100 },
      },
    ],
  },
  {
    path: '/findid',
    component: FindIDContent,
    meta: {
      hideNavBar: true,
      homeRoute: 'login',
      title: '아이디 찾기',
    },
    children: [
      {
        path: '',
        name: 'tab-id-container',
        component: TabContainer,
        children: [
          {
            path: 'phone',
            name: 'find-id-by-phone',
            component: FindIDByPhone,
            meta: {
              tabTitle: '휴대폰 인증',
            },
          },
          {
            path: 'email',
            name: 'find-id-by-email',
            component: FindIDByEmail,
            meta: {
              tabTitle: '이메일 인증',
            },
          },
        ],
      },
      {
        path: 'result',
        name: 'find-id-result',
        component: FindIDResult,
      },
    ],
  },
  {
    path: '/findpassword',
    component: FindPasswordContent,
    meta: {
      hideNavBar: true,
      homeRoute: 'login',
      title: '비밀번호 찾기',
    },
    children: [
      {
        path: '',
        name: 'tab-password-container',
        component: TabContainer,
        children: [
          {
            path: 'phone',
            name: 'find-password-by-phone',
            component: FindPasswordByPhone,
            meta: {
              tabTitle: '휴대폰 인증',
            },
          },
          {
            path: 'email',
            name: 'find-password-by-email',
            component: FindPasswordByEmail,
            meta: {
              tabTitle: '이메일 인증',
            },
          },
        ],
      },
      {
        path: 'reset',
        name: 'find-password-reset',
        component: FindPasswordReset,
      },
      {
        path: 'complete',
        name: 'find-password-complete',
        component: FindPasswordComplete,
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
