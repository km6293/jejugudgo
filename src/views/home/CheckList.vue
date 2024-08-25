<template>
  <div class="check-list-container">
    <div class="check-list">
      <div
        v-for="item of 100"
        :key="item"
        class="list-content"
      >
        <div :class="['list-check', { active }]">
          <Check1Icon
            v-if="active"
            :active="true"
            width="18px"
            height="18px"
          />
        </div>
        <div class="list-detail body1-regular">칫솔</div>
      </div>
    </div>
    <div class="add-list">
      <AddIcon />
      <div class="add-title body2-bold">항목 추가</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check1Icon, AddIcon } from '@/components';
const active = true;
</script>

<style scoped>
.check-list-container {
  padding: 20px 20px 0px 20px;
  position: relative;
}

.check-list {
  border-radius: var(--radius-s);
  background-color: var(--color-card-surface);
}

.list-check {
  width: 20px;
  height: 20px;
  background-color: var(--color-neutral-700);
  border-radius: 4px;
}

.list-check.active {
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-green-500);
}

.list-content {
  display: flex;
  align-items: center;
  height: 52px;
  padding: var(--margin-s) var(--margin-m2);
  gap: 16px;
}

.list-detail {
  color: var(--color-text-active);
}

.add-list {
  padding: var(--padding-m);
  border-radius: var(--radius-xl);
  gap: var(--spacing-1);
  background-color: var(--color-button-primary);
  width: 11.2rem;
  height: 4rem;
  left: 100%;
  bottom: 10px;
  position: sticky;
  display: flex;
  align-items: center;
}

.add-title {
  color: var(--color-button-on-primary);
}
</style>
