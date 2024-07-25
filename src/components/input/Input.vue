<template>
  <div :class="['form-input', `state-${inputState}`]">
    <!-- label -->
    <label
      class="input-label body2-medium"
      v-if="label"
      >{{ label }}</label
    >

    <!-- input, icon -->
    <div class="input-wrapper">
      <input
        class="body2-medium"
        :class="{ 'has-icon': hasIcon }"
        :type="inputType"
        v-model="internalValue"
        :placeholder="placeholder"
        :style="props.style"
        :maxlength="props.maxlength"
      />

      <div class="icons">
        <span
          class="icon"
          v-if="showTogglePassword"
          @click="togglePasswordVisibility"
        >
          <component :is="inputType === 'password' ? EyeOffIcon : EyeOnIcon" />
        </span>
        <span
          v-if="props.type === 'text'"
          class="icon"
        >
          <template v-if="inputState === 'error'">
            <ErrorIcon @click="clearInput" />
          </template>
          <template v-else-if="inputState === 'success'">
            <LoginCheckIcon />
          </template>
          <template v-else>
            <DeleteIcon
              @click="clearInput"
              v-if="showClearIcon"
            />
          </template>
        </span>
      </div>
    </div>

    <!-- message -->
    <div
      v-if="message"
      class="message caption-medium"
    >
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  computed,
  defineProps,
  defineEmits,
  withDefaults,
} from 'vue';
import {
  LoginCheckIcon,
  EyeOffIcon,
  EyeOnIcon,
  ErrorIcon,
  DeleteIcon,
} from '@/components';
import { IInputType } from './InputTypes';

const props = withDefaults(defineProps<IInputType>(), {
  modelValue: '',
  type: 'text',
  state: 'default',
});

const emit = defineEmits(['update:modelValue']);
const internalValue = ref(props.modelValue);
const inputType = ref(props.type);
const inputState = ref(props.state);

watch(
  () => props.state,
  (newState) => {
    inputState.value = newState;
  }
);

const togglePasswordVisibility = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
};

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});

const clearInput = () => {
  internalValue.value = '';
};

const hasIcon = computed(
  () =>
    ['success', 'error', 'password'].includes(inputState.value) || showClearIcon
);
const showTogglePassword = computed(() => props.type === 'password');
const showClearIcon = computed(
  () => Boolean(internalValue.value) && !props.readonly
);
</script>

<style lang="scss" scoped>
.form-input {
  width: 100%;
  display: flex;
  flex-direction: column;

  .input-label {
    margin-bottom: 4px;
    color: var(--color-text-body);
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      padding: 1.2rem 1.6rem;
      border: 1px solid var(--color-neutral-300);
      border-radius: 12px;
      background-color: transparent;
      color: var(--color-text-active);

      &:focus {
        outline: none;
      }
    }

    .icons {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);

      .icon {
        margin-left: 0.5rem;
        color: var(--color-text-muted);
      }
    }
  }

  .message {
    margin-top: 8px;
  }

  &.state-default {
    input {
      border-color: var(--color-neutral-300);

      &:focus {
        border-color: var(--color-neutral-white);
      }
    }
    .message {
      color: var(--color-text-muted);
    }
  }

  &.state-success {
    input {
      border-color: var(--color-primary-700);
    }

    .message {
      color: var(--color-text-muted);
    }
  }

  &.state-filled {
    input {
      border-color: var(--color-neutral-500);
    }

    .message {
      color: var(--color-text-muted);
    }
  }

  &.state-error {
    input {
      border-color: var(--color-text-error);
    }

    .message {
      color: var(--color-text-error);
    }
  }

  &.state-disabled {
    input {
      border-color: var(--color-neutral-600);

      &::placeholder {
        color: var(--color-text-disabled);
      }
    }
  }
}
</style>
