<template>
  <div
    class="status-button caption-medium"
    :class="props.status"
  >
    <span
      v-if="locked"
      class="icon"
    >
      <LockIcon />
    </span>
    <span
      v-if="unlocked"
      class="icon"
    >
      <UnlockIcon />
    </span>
    {{ statusLabel }}
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { LockIcon, UnlockIcon } from '@/components';

interface Props {
  status: 'scheduled' | 'ongoing' | 'finished' | 'public' | 'private';
}

const props = defineProps<Props>();

const locked = computed(() => props.status === 'private');
const unlocked = computed(() => props.status === 'public');

const statusLabel = computed(() => {
  switch (props.status) {
    case 'scheduled':
      return '진행예정';
    case 'ongoing':
      return '진행중';
    case 'finished':
      return '종료';
    case 'public':
      return '공개';
    case 'private':
      return '비공개';
    default:
      return '';
  }
});
</script>

<style scoped>
.status-button {
  width: 6.4rem;
  height: 2.4rem;
  border-radius: var(--radius-xs);
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
}

.icon {
  display: flex;
}

.scheduled {
  background-color: var(--color-button-secondary);
  color: var(--color-button-on-secondary);
}

.ongoing {
  background-color: var(--color-button-primary);
  color: var(--color-button-on-primary);
}

.finished {
  background-color: var(--color-button-disabled);
  color: var(--color-text-body);
}

.public {
  background-color: var(--color-button-primary);
  color: var(--color-button-on-primary);
}

.private {
  background-color: var(--color-button-disabled);
  color: var(--color-text-body);
}
</style>
