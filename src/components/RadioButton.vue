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
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        @change="updateValue(option.value)"
      />
      <label :for="option.value">{{ option.label }}</label>
      <span
        v-if="option.description"
        class="description"
        >{{ option.description }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'RadioButton',
  props: {
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
    name: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(value: string) {
      this.$emit('update:modelValue', value);
    },
  },
});
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
  margin-bottom: 1.2rem;

  &.last-option {
    margin-bottom: 0;
  }
}

.radio-option input[type='radio'] {
  margin-right: 1.2rem;
}

.radio-option input[type='radio']:checked {
  accent-color: var(--color-primary-300);
}

.radio-option label {
  flex-grow: 1;
}

.radio-option .description {
  margin-left: 1.2rem;
  color: var(--color-neutral-500);
  flex-shrink: 0;
}
</style>
