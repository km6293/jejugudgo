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
import { RouteRecordRaw, useRoute } from 'vue-router';

const route = useRoute();
const tabs: ITabContainerType[] = [];

const matchedRoute = route.matched.find(
  (r) =>
    r.name === 'tab-id-container' ||
    r.name === 'tab-password-container' ||
    r.name === 'tab-home-container'
) as RouteRecordRaw | undefined;

if (matchedRoute && matchedRoute.children) {
  matchedRoute.children.forEach((child: RouteRecordRaw) => {
    if (
      child.name &&
      typeof child.name === 'string' &&
      child.meta &&
      typeof child.meta.tabTitle === 'string'
    ) {
      tabs.push({
        name: child.name,
        label: child.meta.tabTitle,
        path: matchedRoute.path + '/' + child.path,
      });
    }
  });
}
</script>

<style>
.tab-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
