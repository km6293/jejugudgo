<template>
  <div class="radio-group">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="radio-option"
      :class="{ 'last-option': index === options.length - 1 }"
    >
      <input
        type="radio"
        :id="option.value"
        :value="option.value"
        :checked="modelValue === option.value"
        @change="updateValue(option.value)"
        class="hidden-radio"
      />
      <label
        class="body1-regular radio-label"
        :for="option.value"
      >
        <span class="icon">
          <component
            :is="
              modelValue === option.value
                ? RadioCheckedIcon
                : RadioNotCheckedIcon
            "
          />
        </span>
        {{ option.label }}
      </label>
      <span
        v-if="option.description"
        class="description caption-regular"
      >
        {{ option.description }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, defineEmits, defineProps } from 'vue';
import { RadioCheckedIcon, RadioNotCheckedIcon } from '@/components';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<
      Array<{ label: string; value: string; description?: string }>
    >,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (value: string) => {
  emit('update:modelValue', value);
};
</script>

<style scoped lang="scss">
.radio-group {
  display: flex;
  flex-direction: column;
}

.radio-option {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &.last-option {
    margin-bottom: 0;
  }
}

.hidden-radio {
  display: none;
}

.radio-label {
  flex-grow: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-neutral-white);
}

.radio-label .icon {
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.radio-option .description {
  margin-left: 1.2rem;
  color: var(--color-neutral-500);
  flex-shrink: 0;
}
</style>
