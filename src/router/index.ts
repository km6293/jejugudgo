import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/views/auth/Login.vue';
import NotFound from '@/views/NotFound.vue';
import OAuthCallback from '@/views/auth/OAuthCallback.vue';
import { getCookie } from '@/utils/cookies';
import { moveTabStore, saveTabStore } from '@/utils/enterCondition';

const loadComponent = (componentPath: string) => () =>
  import(`@/views/${componentPath}.vue`);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: loadComponent('home/Content'),
    meta: { hideAppBar: true },
    children: [
      {
        path: '',
        name: 'tab-home-container',
        component: () => import('@/components/tabBar/TabContainer.vue'),
        beforeEnter: (to, from, next) => moveTabStore(to.path, next),
        children: [
          {
            path: 'course',
            name: 'home-course',
            component: loadComponent('home/Course'),
            beforeEnter: (to, from, next) => saveTabStore(to.path, next),
            meta: { tabTitle: '코스' },
          },
          {
            path: 'trail',
            name: 'home-trail',
            component: loadComponent('home/Trail'),
            beforeEnter: (to, from, next) => saveTabStore(to.path, next),
            meta: { tabTitle: '산책로' },
          },
          {
            path: 'jeju-tidings',
            name: 'home-jeju-tidings',
            component: loadComponent('home/JejuTidings'),
            beforeEnter: (to, from, next) => saveTabStore(to.path, next),
            meta: { tabTitle: '제주 이야기' },
          },
        ],
      },
    ],
  },
  {
    path: '/oauth/callback',
    name: 'oauth-callback',
    component: OAuthCallback,
    meta: { hideNavBar: true },
  },
  {
    path: '/check-list',
    name: 'check-list',
    component: loadComponent('home/CheckList'),
  },
  {
    path: '/recommended-course',
    name: 'recommended-course',
    component: loadComponent('recommendedCourse/RecommendedCourse'),
    meta: { hideAppBar: true },
  },
  {
    path: '/course-search',
    name: 'course-search',
    component: loadComponent('courseSearch/CourseSearch'),
    meta: { hideAppBar: true },
  },
  {
    path: '/create-course',
    name: 'create-course',
    component: loadComponent('recommendedCourse/CreateCourse'),
    meta: { title: '코스생성', hideNavBar: true },
  },
  {
    path: '/walk-together',
    name: 'walk-together',
    component: loadComponent('walkTogether/Content'),
    meta: { hideAppBar: true },
    children: [
      {
        path: '',
        name: 'tab-walk-together-container',
        component: () => import('@/components/tabBar/TabContainer.vue'),
        beforeEnter: (to, from, next) => moveTabStore(to.path, next),
        children: [
          {
            path: 'find-recruitment',
            name: 'walk-together-find-recruitment',
            component: loadComponent('walkTogether/FindRecruitment'),
            beforeEnter: (to, from, next) => saveTabStore(to.path, next),
            meta: { tabTitle: '동행찾기' },
          },
          {
            path: 'chatting',
            name: 'walk-together-chatting',
            component: loadComponent('walkTogether/Chatting'),
            beforeEnter: (to, from, next) => saveTabStore(to.path, next),
            meta: { tabTitle: '채팅' },
          },
        ],
      },
    ],
  },
  {
    path: '/recruitment/:id',
    name: 'recruitmentDetail',
    component: loadComponent('walkTogether/RecruitmentDetail'),
    meta: { appBarCloseButton: false },
  },
  {
    path: '/createRecruitment',
    name: 'createRecruitment',
    component: loadComponent('walkTogether/CreateRecruitment'),
    meta: { appBarCloseButton: false, title: '동행 찾기' },
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
      },
      {
        path: 'id',
        name: 'signup-id',
        component: loadComponent('auth/SignUpID'),
      },
      {
        path: 'password',
        name: 'signup-password',
        component: loadComponent('auth/SignUpPassword'),
      },
      {
        path: 'verification',
        name: 'signup-verification',
        component: loadComponent('auth/SignUpVerification'),
      },
      {
        path: 'complete',
        name: 'signup-complete',
        component: loadComponent('auth/SignUpComplete'),
        meta: { appBarBackButton: false },
      },
    ],
  },
  {
    path: '/findid',
    component: loadComponent('auth/FindIDContent'),
    meta: {
      hideNavBar: true,
      homeRoute: 'login',
      title: '아이디 찾기',
    },
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
    meta: {
      hideNavBar: true,
      homeRoute: 'login',
      title: '비밀번호 찾기',
    },
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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      return next({ path: '/login', query: { redirect: to.fullPath } });
    }
  }

  next();
});

function isLoggedIn() {
  return !!getCookie('user');
}

export default router;
