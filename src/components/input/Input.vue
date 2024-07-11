<template>
  <div :class="['form-input', `state-${inputState}`]">
    <!-- label -->
    <label v-if="label">{{ label }}</label>

    <!-- input, icon -->
    <div class="input-wrapper">
      <input
        :class="{ 'has-icon': hasIcon }"
        :type="inputType"
        v-model="internalValue"
        :placeholder="placeholder"
        :readonly="readonly"
        :style="props.style"
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
      class="message"
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
  onMounted,
} from 'vue';
import {
  LoginCheckIcon,
  EyeOffIcon,
  EyeOnIcon,
  ErrorIcon,
  DeleteIcon,
} from '@/components/icons/basic';
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

const togglePasswordVisibility = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
};

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});

const clearInput = () => {
  internalValue.value = '';
};

onMounted(() => {
  if (props.success || props.error) {
    watch(
      () => internalValue.value,
      (newValue) => {
        if (props.success && props.success(newValue)) {
          console.log('success: ', newValue);
          inputState.value = 'success';
        } else if (props.error && props.error(newValue)) {
          console.log('error: ', newValue);
          inputState.value = 'error';
        } else if (newValue) {
          inputState.value = 'filled';
        } else {
          inputState.value = 'default';
        }
      }
    );
  }
});

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
  max-width: 43.2rem;
}

label {
  font-size: 1.4rem;
  margin-bottom: 4px;
  color: var(--color-text-body);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;

    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border: 1px solid var(--color-neutral-300);
    border-radius: 12px;
    background-color: transparent;
    color: var(--color-text-active);
    font-family: 'Pretendard-Regular', sans-serif;
    line-height: 20px;

    &:focus {
      outline: none;
      border-color: var(--color-neutral-white);
    }
  }

  .icons {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .icon {
    margin-left: 0.5rem;
    color: var(--color-text-muted);
  }
}

.message {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  margin-top: 8px;
}

.state-default input {
  border-color: var(--color-neutral-300);
}

.state-success input,
.state-filled input,
.state-error input,
.state-disabled input {
  &:focus {
    border-color: inherit;
  }
}

.state-success input {
  border-color: var (--color-primary-700);
}

.state-filled input {
  border-color: var (--color-neutral-500);
}

.state-error input {
  border-color: var (--color-text-error);
}

.state-disabled input {
  border-color: var (--color-neutral-600);
  color: var (--color-text-disabled);

  &::placeholder {
    color: var (--color-text-disabled);
  }
}
</style>
