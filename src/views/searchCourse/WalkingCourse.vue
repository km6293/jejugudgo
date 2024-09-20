<template>
  <div class="container">
    <div class="search-map">
      <div id="map_div"></div>

      <div
        class="select-button start-button body1-bold"
        @click="openModal()"
      >
        코스 종료
      </div>
      <div class="select-button detail-button body1-bold">기록 생성</div>

      <div v-if="showModal">
        <WalkingModal
          status="complete"
          :closeModal="closeModal"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMap } from '@/hooks';
import { WalkingModal } from './components';

const map = ref<any>(null);
const showModal = ref(false);

const { initTmap, moveNowLocation, searchRoutesTest } = useMap(map);

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation();
  await searchRoutesTest(map);
});

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.search-map {
  flex-grow: 1;
  height: calc(100% - 200px);
  position: relative;
  transition: height 0.3s ease;
}

.select-button {
  width: 154px;
  height: 48px;
  border-radius: var(--padding-s);
  padding: var(--padding-m);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
}

.start-button {
  background-color: var(--color-button-primary);
  color: var(--button-on-primary);
  left: 20px;
}

.detail-button {
  background-color: #242424;
  color: #ffffff;
  right: 20px;
}
</style>
