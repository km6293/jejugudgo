<template>
  <dialog
    ref="bottomSheet"
    class="bottom-sheet"
    @mousedown="startDrag"
    @touchstart="startDrag"
  >
    <div
      class="drag-handle"
      @click="handleClick"
    >
      <div class="drag-handle-line"></div>
    </div>
    <div
      ref="content"
      class="content"
    >
      <slot></slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const bottomSheet = ref<HTMLDialogElement | null>(null);
const handleHeight = 32;
const threeFifthHeight = window.innerHeight * (3 / 5);
const content = ref<HTMLElement | null>(null);

let startY = 0;
let currentTranslateY = threeFifthHeight;
let isDragging = false;

const updateSheetPosition = (translateY: number) => {
  if (!bottomSheet.value) return;
  currentTranslateY = translateY;
  bottomSheet.value.style.transform = `translateY(${translateY}px)`;

  if (content.value) {
    content.value.style.height = `${
      window.innerHeight - translateY - handleHeight
    }px`;
  }
};

const startDrag = (event: MouseEvent | TouchEvent) => {
  event.stopPropagation();

  isDragging = true;
  startY = 'touches' in event ? event.touches[0].clientY : event.clientY;

  document.addEventListener('mousemove', drag);
  document.addEventListener('touchmove', drag);
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);
};

const drag = (event: MouseEvent | TouchEvent) => {
  if (!isDragging || !bottomSheet.value) return;

  const currentY =
    'touches' in event ? event.touches[0].clientY : event.clientY;
  const deltaY = currentY - startY;

  if (deltaY < 0 && currentTranslateY === 0) return;

  const newTranslateY = Math.max(
    0,
    Math.min(currentTranslateY + deltaY, threeFifthHeight)
  );

  updateSheetPosition(newTranslateY);
  startY = currentY;
};

const endDrag = () => {
  if (!isDragging || !bottomSheet.value) return;

  isDragging = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('touchmove', drag);
  document.removeEventListener('mouseup', endDrag);
  document.removeEventListener('touchend', endDrag);

  if (currentTranslateY > threeFifthHeight) {
    closeSheetPartial();
  } else if (currentTranslateY > 0) {
    openSheetPartial();
  } else {
    openSheet();
  }
};

const handleClick = () => {
  if (
    currentTranslateY === window.innerHeight - handleHeight ||
    currentTranslateY === 0
  ) {
    openSheetPartial();
  }
};

const closeSheetPartial = () =>
  updateSheetPosition(window.innerHeight - handleHeight);
const openSheetPartial = () => updateSheetPosition(threeFifthHeight);
const openSheet = () => updateSheetPosition(0);

onMounted(() => {
  if (bottomSheet.value && content.value) {
    bottomSheet.value.show();
    updateSheetPosition(threeFifthHeight);
  }
});
</script>

<style lang="scss" scoped>
.bottom-sheet {
  position: fixed;
  justify-self: center;
  max-width: 768px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  background-color: var(--color-card-surface);
  border-radius: 1rem 1rem 0 0;
  z-index: 1001;
  transform: translateY(100%);
  transition: transform 0.3s ease-out;

  &.open {
    transform: translateY(0);
  }

  &::backdrop {
    background-color: var(--color-card-surface, 333333);
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
  }

  .content {
    flex: 1;
    overflow-y: auto;
  }

  .drag-handle {
    width: 100%;
    height: 32px;
    border-radius: 1rem 1rem 0 0;
    align-content: center;
  }

  .drag-handle-line {
    background-color: #79747e;
    height: 4px;
    width: 32px;
    margin: 16px auto;
  }

  @media (prefers-color-scheme: light) {
    .content {
      color: black;
    }
  }
}
</style>
