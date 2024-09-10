<template>
  <div class="container">
    <div id="map_div"></div>
    <SwipeModal>
      <StartCourse
        v-if="activeStep === 1"
        :setStep="setStep"
      />
      <HelperCourse
        v-if="activeStep === 2"
        :setStep="setStep"
      />
      <HelperResult
        v-if="activeStep === 3"
        :setStep="setStep"
      />
    </SwipeModal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMap, useLocation } from '@/hooks';
import { SwipeModal } from '@/components';
import { StartCourse, HelperCourse, HelperResult } from './components';

const map = ref<any>(null);

const { initTmap } = useMap(map);
const { moveNowLocation } = useLocation(map);

const activeStep = ref(1);
const setStep = (step: number) => {
  activeStep.value = step;
};

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation(map);
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
