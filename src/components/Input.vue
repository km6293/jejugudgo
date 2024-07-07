<template>
  <div :class="['form-input', stateClass]">
    <label
      v-if="label"
      :for="id"
      >{{ label }}</label
    >
    <div class="input-wrapper">
      <input
        :id="id"
        :class="{ 'has-icon': hasIcon, 'is-focused': isFocused }"
        :type="inputType"
        :value="modelValue"
        :placeholder="placeholder"
        :readonly="readonly"
        :style="inputStyle"
        @input="readonly ? null : onInput"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <div class="icons">
        <span
          class="icon"
          v-if="modelValue.length > 0 && !readonly"
          @click="clearInput"
        >
          <DeleteIcon />
        </span>
        <span
          class="icon"
          v-if="showTogglePassword && !readonly"
          @click="togglePasswordVisibility"
        >
          <EyeOffIcon v-if="inputType === 'password'" />
          <EyeOnIcon v-else />
        </span>
        <span
          class="icon"
          v-if="state === 'success'"
        >
          <LoginCheckIcon />
        </span>
        <span
          v-if="state === 'error'"
          class="icon"
        >
          <ErrorIcon />
        </span>
      </div>
    </div>
    <div
      v-if="helpMessage"
      class="help-message"
    >
      {{ helpMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, CSSProperties } from 'vue';
import LoginCheckIcon from '@/components/icons/basic/LoginCheck.vue';
import EyeOffIcon from '@/components/icons/basic/EyeOff.vue';
import EyeOnIcon from '@/components/icons/basic/EyeOn.vue';
import ErrorIcon from '@/components/icons/basic/Error.vue';
import DeleteIcon from '@/components/icons/basic/Delete.vue';

export default defineComponent({
  name: 'Input',
  components: {
    LoginCheckIcon,
    EyeOffIcon,
    EyeOnIcon,
    ErrorIcon,
    DeleteIcon,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    id: {
      type: String,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<'text' | 'password'>,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    helpMessage: {
      type: String,
      default: '',
    },
    state: {
      type: String as PropType<
        'default' | 'focused' | 'success' | 'filled' | 'error'
      >,
      default: 'default',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    fontSize: {
      type: String,
      default: '1.6rem',
    },
  },
  setup(props, { emit }) {
    const inputType = ref(props.type);
    const isFocused = ref(false);

    const togglePasswordVisibility = () => {
      inputType.value = inputType.value === 'password' ? 'text' : 'password';
    };

    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (!props.readonly && target) {
        emit('update:modelValue', target.value);
      }
    };

    const clearInput = () => {
      if (!props.readonly) {
        emit('update:modelValue', '');
      }
    };

    const hasIcon = computed(() => {
      return (
        props.state === 'success' ||
        props.state === 'error' ||
        props.type === 'password'
      );
    });

    const inputStyle = computed((): CSSProperties => {
      return {
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
      };
    });

    return {
      inputType,
      togglePasswordVisibility,
      onInput,
      clearInput,
      showTogglePassword: props.type === 'password',
      stateClass: `state-${props.state}`,
      hasIcon,
      isFocused,
      inputStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-input {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.4rem;
  margin-bottom: 4px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

input {
  width: 100%;
  font-size: 1.4rem;
  padding: 1rem 1.6rem;
  padding-right: 3.5rem;
  border: 1px solid $color-neutral-300;
  border-radius: 12px;
  box-sizing: border-box;

  &.has-icon {
    padding-right: 6rem;
  }

  &.is-focused {
    border-color: $color-neutral-white !important;
  }

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
}

.icon {
  margin-left: 0.5rem;
}

.help-message {
  font-size: 1.2rem;
  color: $color-text-muted;
  margin-top: 4px;
}

.state-default input {
  border-color: $color-neutral-300;
}

.state-focused input {
  border-color: $color-neutral-white;
}

.state-success input {
  border-color: $color-primary-700;
}

.state-filled input {
  border-color: $color-neutral-500;
}

.state-error input {
  border-color: $color-error;
}

.state-disabled input {
  border-color: $color-neutral-600 !important;
  color: $color-text-disabled;

  &::placeholder {
    color: $color-text-disabled;
  }

  &:focus {
    border-color: $color-neutral-600 !important;
  }
}
</style>
