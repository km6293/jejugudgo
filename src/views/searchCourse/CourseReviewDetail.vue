<template>
  <div class="container">
    <TopBar>
      <template #center>리뷰</template>
      <template #right></template>
    </TopBar>
  </div>
  <div class="contents">
    <div class="clear-box body1-bold">
      <p>
        <span class="text-highlight">7월 16일 수요일</span>
        <span class="text-color">에</span>
      </p>
      <p>
        <span class="text-highlight">송악산둘레길</span>
        <span class="text-color"> 코스를 완주하셨네요!</span>
      </p>
    </div>

    <div
      v-for="(config, index) in tagConfigs"
      :key="index"
      class="content-title"
    >
      <h3 class="review-title subheading-bold">{{ config.title }}</h3>
      <ReviewTags
        @tag-click="handleTagClick(config.selectedTags)"
        :tags="config.tags"
        :selectedTags="config.selectedTags"
      />
    </div>

    <Button
      text="작성완료"
      @click="reviewCompleted"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TopBar } from '../myWalk/components';
import { ReviewTags } from './components';
import { Button } from '@/components';
import { reviewList, togetherList, purposeList } from '@/constants';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedPurposeTags = ref<string[]>([]);
const selectedTogetherTags = ref<string[]>([]);
const selectedReviewTags = ref<string[]>([]);

const tagConfigs = ref([
  {
    title: '걷기코스 참여 목적을 알려주세요.',
    tags: purposeList,
    selectedTags: selectedPurposeTags,
  },
  {
    title: '누구와 함께 했나요?',
    tags: togetherList,
    selectedTags: selectedTogetherTags,
  },
  {
    title: '어떤 느낌이었나요?',
    tags: reviewList,
    selectedTags: selectedReviewTags,
  },
]);

const handleTagClick = (tagList: any) => (tag: string) => {
  if (tagList.value.includes(tag)) {
    tagList.value = tagList.value.filter((t) => t !== tag);
  } else {
    tagList.value.push(tag);
  }
  console.log(tagList.value);
};

const reviewCompleted = () => {
  router.push({ name: 'home' });
};
</script>

<style scoped>
.container {
  position: relative;
}

.contents {
  padding: 68px 20px 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: var(--margin-xl);
  align-items: center;
}

.clear-box {
  width: 32rem;
  height: 8rem;
  background-color: var(--color-card-surface);
  align-content: center;
  text-align: center;
  border-radius: var(--radius-s);
  padding: var(--margin-m);
}

.text-highlight {
  color: #22f779;
}

.text-color {
  color: var(--color-neutral-100);
}

.review-title {
  color: var(--color-card-on-surface);
}

.content-title {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
</style>
