<template>
  <div class="container">
    <TopBar>
      <template #left></template>
      <template #center>마이걷고</template>
      <template #right><SettingIcon /></template>
    </TopBar>
    <div class="contents">
      <MyUser />
      <WalkingSummary />
      <MyRecord />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SettingIcon } from '@/components';
import { WalkingSummary, MyUser, MyRecord, TopBar } from './components';
</script>

<style scoped>
.container {
  position: relative;
}

.contents {
  display: flex;
  flex-direction: column;
  padding: 48px 20px 40px;
  gap: var(--margin-xl);
}
</style>
