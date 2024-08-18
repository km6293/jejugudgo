import { useRootStore } from '@/stores/rootStore';
import { storeToRefs } from 'pinia';
import { Ref } from 'vue';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const moveTabStore = (path: string, next: NavigationGuardNext) => {
  const rootStore = useRootStore();
  const { tabHome, tabWalkTogether } = storeToRefs(rootStore);
  const pathList = path.split('/');

  const tabValue: { [key: string]: string } = {
    ['walk-together']: tabWalkTogether.value,
    ['home']: tabHome.value,
  };

  const basePath = pathList[1] as keyof typeof tabValue;
  const targetPath = `/${basePath}/${tabValue[basePath]}`;

  if (tabValue[basePath] && path !== targetPath) {
    return next({ path: targetPath });
  }

  next();
};
export const saveTabStore = (path: string, next: NavigationGuardNext) => {
  const rootStore = useRootStore();
  const { tabHome, tabWalkTogether } = storeToRefs(rootStore);
  const pathList = path.split('/');

  const tabValue: { [key: string]: Ref<string> } = {
    ['walk-together']: tabWalkTogether,
    ['home']: tabHome,
  };

  const basePath = pathList[1] as keyof typeof tabValue;

  if (basePath in tabValue) {
    tabValue[basePath].value = pathList[2];
  }

  next();
};

export const isLeavingParentRoute = (
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
