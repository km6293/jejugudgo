import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/views/Auth/Login.vue';
import NotFound from '@/views/NotFound.vue';
import OAuthCallback from '@/views/Auth/OAuthCallback.vue';
import { getCookie } from '@/utils/cookies';
import { moveTabStore, saveTabStore } from '@/utils/enterCondition';

const loadComponent = (componentPath: string) => () =>
  import(`@/views/${componentPath}.vue`);

// 추후 유효성 검사 필요
const isTokenValid = (token: string | null): boolean => {
  return !!token;
};

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
    path: '/events',
    name: 'eventList',
    component: loadComponent('home/Event'), // EventList 컴포넌트가 있는 경로를 정확히 입력
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
  // {
  //   path: '/recommended-course',
  //   name: 'recommended-course',
  //   component: loadComponent('recommendedCourse/RecommendedCourse'),
  //   meta: { hideAppBar: true },
  // },
  {
    path: '/search-course',
    name: 'search-course',
    component: loadComponent('searchCourse/SearchCourse'),
    meta: { hideAppBar: true },
  },
  {
    path: '/walking-course',
    name: 'walking-course',
    component: loadComponent('searchCourse/WalkingCourse'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  {
    path: '/walking-course',
    name: 'walking-course',
    component: loadComponent('searchCourse/WalkingCourse'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  {
    path: '/course-review-start',
    name: 'course-review-start',
    component: loadComponent('searchCourse/CourseReviewStart'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  {
    path: '/course-review-detail',
    name: 'course-review-detail',
    component: loadComponent('searchCourse/CourseReviewDetail'),
    meta: { hideAppBar: true, hideNavBar: true },
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
    meta: { appBarCloseButton: false, hideNavBar: true },
  },
  {
    path: '/chatting-detail/:id',
    name: 'chatDetail',
    component: loadComponent('walkTogether/ChattingDetail'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  {
    path: '/createRecruitment',
    name: 'createRecruitment',
    component: loadComponent('walkTogether/CreateRecruitment'),
    meta: { appBarCloseButton: false, title: '동행 찾기', hideNavBar: true },
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
  {
    path: '/my-walk',
    name: 'my-walk',
    component: loadComponent('myWalk/MyWalk'),
    meta: { hideAppBar: true },
  },
  {
    path: '/walking-travel',
    name: 'walking-travel',
    component: loadComponent('myWalk/WalkingTravel'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  {
    path: '/course-usage-history',
    name: 'course-usage-history',
    component: loadComponent('myWalk/CourseUsageHistory'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  {
    path: '/course-creation-history',
    name: 'course-creation-history',
    component: loadComponent('myWalk/CourseCreationHistory'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: loadComponent('myWalk/Favorites'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  {
    path: '/review-management',
    name: 'review-management',
    component: loadComponent('myWalk/ReviewManagement'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  {
    path: '/badge-history',
    name: 'badge-history',
    component: loadComponent('myWalk/BadgeHistory'),
    meta: { hideAppBar: true, hideNavBar: true },
  },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/home') {
    const token = getCookie('Authorization');
    if (isTokenValid(token)) {
      return next({ path: '/home/course' });
    } else {
      return next({ path: '/login' });
    }
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = getCookie('Authorization');
    if (!isTokenValid(token)) {
      return next({ path: '/login', query: { redirect: to.fullPath } });
    }
  }

  next();
});

function isLoggedIn() {
  return !!getCookie('user');
}

export default router;
