<template>
  <div class="tab-container">
    <TabBar :tabs="tabs" />
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in">
        <component
          :is="Component"
          :key="route.path"
        ></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { TabBar } from '@/components';
import { ITabContainerType } from './TabContainerTypes';
import { useRoute } from 'vue-router';

const route = useRoute();
const tabs: ITabContainerType[] = [];

const matchedPath = route.matched.find((path) => {
  return typeof path.name === 'string' && path.name.indexOf('-container') >= 0;
});

if (matchedPath) {
  const childTabs = matchedPath.children.map((child) => {
    return {
      name: child.name as string,
      label: (child.meta?.tabTitle as string) || '',
      path: matchedPath.path + '/' + child.path,
    };
  });

  tabs.push(...childTabs);
}
</script>

<style>
.tab-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
