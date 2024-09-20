<template>
  <div class="container">
    <ModalHeader
      title="최적의 걷기 시작점을 찾았어요!"
      :showRightButton="false"
      :left-step="-1"
    />
    <div class="content">
      <div class="items">
        <!-- <div
          class="item"
          v-for="item of 10"
          :key="item"
          @click="onHelperClick"
        >
          <CardImage
            :test="'74x74'"
            :icon="false"
          />
          <div class="card-info">
            <div class="info-head body1-medium">장소명</div>
            <div class="info-content caption-regular">
              <div>장소에 대한 설명</div>
              <div>장소에 대한 설명</div>
            </div>
          </div>
        </div> -->
        <div
          class="item"
          v-for="spot in spots"
          :key="spot.id"
          @click="onHelperClick(spot)"
        >
          <CardImage
            :icon="false"
            :src="spot.imageUrl"
            :imageStyle="{
              width: '74px',
              height: '74px',
            }"
          />
          <div class="card-info">
            <div class="info-head body1-medium">{{ spot.title }}</div>
            <div class="info-content caption-regular">
              <div>{{ spot.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardImage } from '@/components';
import { ModalHeader } from './index';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import {
  findRecommentSpot,
  IFindRecommentSpotResponse,
} from '@/apis/courseFeature';
const createCourseStore = useCreateCourseStore();
const { selectedObject, suggestionCourse } = storeToRefs(createCourseStore);

const spots = ref<Array<IFindRecommentSpotResponse>>([]);

const helper = {
  name: 'help',
  longitude: 126.37650387454218,
  latitude: 33.47432039426073,
};

const onHelperClick = () => {
  const { type, index } = selectedObject.value;

  createCourseStore.updateData(type, helper, index);
  createCourseStore.updateData('page', 1);
  createCourseStore.updateData('suggestionCourse', '');
};

onMounted(async () => {
  const result = await findRecommentSpot(
    33.47432039426073,
    126.37650387454218,
    suggestionCourse.value
  );

  spots.value = result;
});
</script>

<style scoped>
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.items {
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
}

.item {
  display: flex;
  gap: var(--margin-m);
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: var(--margin-s);
}

.info-head {
  color: var(--color-text-secondary);
}

.info-content {
  color: var(--color-text-body);
}
</style>
