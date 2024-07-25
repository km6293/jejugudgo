import {
  CourseSearchActiveIcon,
  CourseSearchDisabledIcon,
  HomeActiveIcon,
  HomeDisabledIcon,
  MyWalkGoActiveIcon,
  MyWalkGoDisabledIcon,
  WalkTogetherActiveIcon,
  WalkTogetherDisabledIcon,
  CourseActiveIcon,
  CourseDisabledIcon,
} from '@/components';

export interface NavItem {
  to: string;
  label: string;
  iconActive: object;
  iconInactive: object;
}

export const navItems: NavItem[] = [
  {
    to: '/',
    label: '홈',
    iconActive: HomeActiveIcon,
    iconInactive: HomeDisabledIcon,
  },
  {
    to: '/course',
    label: '코스',
    iconActive: CourseActiveIcon,
    iconInactive: CourseDisabledIcon,
  },
  {
    to: '/about',
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
