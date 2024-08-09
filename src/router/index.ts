import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';
import Login from '@/views/auth/Login.vue';
import NotFound from '@/views/NotFound.vue';
import { getCookie } from '@/utils/cookies';
import {
  useSignUpTermsStore,
  useSignUpIDStore,
  useSignUpPasswordStore,
  useSignUpVerificationStore,
} from '@/stores/auth';

const loadComponent = (componentPath: string) => () =>
  import(`@/views/${componentPath}.vue`);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: loadComponent('home/HomeContent'),
    meta: { hideAppBar: true },
    children: [
      {
        path: '',
        name: 'tab-home-container',
        component: () => import('@/components/tabBar/TabContainer.vue'),
        children: [
          {
            path: 'course',
            name: 'home-course',
            component: loadComponent('home/HomeCourse'),
            meta: { tabTitle: '코스' },
          },
          {
            path: 'trail',
            name: 'home-trail',
            component: loadComponent('home/HomeTrail'),
            meta: { tabTitle: '산책로' },
          },
          {
            path: 'jeju-tales',
            name: 'home-jeju-tales',
            component: loadComponent('home/HomeJejuTales'),
            meta: { tabTitle: '제주 이야기' },
          },
        ],
      },
    ],
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
    component: loadComponent('auth/SignUpContent'),
    meta: { hideNavBar: true, homeRoute: 'login', title: '회원가입' },
    redirect: { name: 'signup-terms' },
    children: [
      {
        path: 'terms',
        name: 'signup-terms',
        component: loadComponent('auth/SignUpTerms'),
        meta: { progress: 0 },
      },
      {
        path: 'id',
        name: 'signup-id',
        component: loadComponent('auth/SignUpID'),
        meta: { progress: 20 },
      },
      {
        path: 'password',
        name: 'signup-password',
        component: loadComponent('auth/SignUpPassword'),
        meta: { progress: 40 },
      },
      {
        path: 'verification',
        name: 'signup-verification',
        component: loadComponent('auth/SignUpVerification'),
        meta: { progress: 60 },
      },
      {
        path: 'complete',
        name: 'signup-complete',
        component: loadComponent('auth/SignUpComplete'),
        meta: { progress: 100, appBarBackButton: false },
      },
    ],
  },
  {
    path: '/findid',
    component: loadComponent('auth/FindIDContent'),
    meta: { hideNavBar: true, homeRoute: 'login', title: '아이디 찾기' },
    children: [
      {
        path: '',
        name: 'tab-id-container',
        component: () => import('@/components/tabBar/TabContainer.vue'),
        children: [
          {
            path: 'phone',
            name: 'find-id-by-phone',
            component: loadComponent('auth/FindIDByPhone'),
            meta: { tabTitle: '휴대폰 인증' },
          },
          {
            path: 'email',
            name: 'find-id-by-email',
            component: loadComponent('auth/FindIDByEmail'),
            meta: { tabTitle: '이메일 인증' },
          },
        ],
      },
      {
        path: 'result',
        name: 'find-id-result',
        component: loadComponent('auth/FindIDResult'),
      },
    ],
  },
  {
    path: '/findpassword',
    component: loadComponent('auth/FindPasswordContent'),
    meta: { hideNavBar: true, homeRoute: 'login', title: '비밀번호 찾기' },
    children: [
      {
        path: '',
        name: 'tab-password-container',
        component: () => import('@/components/tabBar/TabContainer.vue'),
        children: [
          {
            path: 'phone',
            name: 'find-password-by-phone',
            component: loadComponent('auth/FindPasswordByPhone'),
            meta: { tabTitle: '휴대폰 인증' },
          },
          {
            path: 'email',
            name: 'find-password-by-email',
            component: loadComponent('auth/FindPasswordByEmail'),
            meta: { tabTitle: '이메일 인증' },
          },
        ],
      },
      {
        path: 'reset',
        name: 'find-password-reset',
        component: loadComponent('auth/FindPasswordReset'),
      },
      {
        path: 'complete',
        name: 'find-password-complete',
        component: loadComponent('auth/FindPasswordComplete'),
      },
    ],
  },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isLeavingParentRoute = (
  from: RouteLocationNormalized,
  to: RouteLocationNormalized,
  path: string
) => {
  const fromParent = from.matched[0];
  const toParent = to.matched[0];
  return (
    fromParent &&
    toParent &&
    fromParent.path !== toParent.path &&
    fromParent.path === path
  );
};

router.beforeEach(async (to, from, next) => {
  const termsStore = useSignUpTermsStore();
  const idStore = useSignUpIDStore();
  const passwordStore = useSignUpPasswordStore();
  const verificationStore = useSignUpVerificationStore();

  if (isLeavingParentRoute(from, to, '/signup')) {
    try {
      await Promise.all([
        termsStore.$reset(),
        idStore.$reset(),
        passwordStore.$reset(),
        verificationStore.$reset(),
      ]);
    } catch (error) {
      console.error('Error resetting stores:', error);
    }
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

function isLoggedIn() {
  return !!getCookie('user');
}

export default router;
