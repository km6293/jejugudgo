import {
  CourseSearchActiveIcon,
  CourseSearchDisabledIcon,
  HomeActiveIcon,
  HomeDisabledIcon,
  MyWalkGoActiveIcon,
  MyWalkGoDisabledIcon,
  WalkTogetherActiveIcon,
  WalkTogetherDisabledIcon,
  // RecommendedCourseActiveIcon,
  // RecommendedCourseDisabledIcon,
} from '@/components';

export interface NavItem {
  to: string;
  label: string;
  iconActive: object;
  iconInactive: object;
}

export const navItems: NavItem[] = [
  {
    to: '/home',
    label: '홈',
    iconActive: HomeActiveIcon,
    iconInactive: HomeDisabledIcon,
  },
  // {
  //   to: '/recommended-course',
  //   label: '추천코스',
  //   iconActive: RecommendedCourseActiveIcon,
  //   iconInactive: RecommendedCourseDisabledIcon,
  // },
  {
    to: '/search-course',
    label: '코스검색',
    iconActive: CourseSearchActiveIcon,
    iconInactive: CourseSearchDisabledIcon,
  },
  {
    to: '/walk-together',
    label: '같이걷기',
    iconActive: WalkTogetherActiveIcon,
    iconInactive: WalkTogetherDisabledIcon,
  },
  {
    to: '/my-walk',
    label: '마이걷고',
    iconActive: MyWalkGoActiveIcon,
    iconInactive: MyWalkGoDisabledIcon,
  },
];
