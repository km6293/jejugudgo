<template>
  <button
    :class="['form-button', buttonState]"
    :disabled="disabled"
    :style="buttonStyle"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
  >
    <span
      class="icon"
      v-if="$slots.icon"
    >
      <slot name="icon" />
    </span>
    <span class="button-text">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    disabled: {
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
    padding: {
      type: String,
      default: '16px',
    },
    fontSize: {
      type: String,
      default: '1.6rem',
    },
  },
  setup(props) {
    const isPressed = ref(false);

    const buttonState = computed(() => {
      if (props.disabled) {
        return 'disabled';
      }
      return isPressed.value ? 'pressed' : 'active';
    });

    const buttonStyle = computed((): CSSProperties => {
      return {
        width: props.width,
        height: props.height,
        padding: props.padding,
        fontSize: props.fontSize,
      };
    });

    return {
      isPressed,
      buttonState,
      buttonStyle,
    };
  },
});
</script>

<style scoped lang="scss">
.form-button {
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-button .icon {
  display: flex;
  align-items: center;
  margin-right: 4px;
}

.form-button .button-text {
  display: flex;
  align-items: center;
}

.form-button.active {
  background-color: $color-button-primary;
}

.form-button.disabled {
  background-color: $color-neutral-500;
  color: $color-neutral-700;
  cursor: default;
}

.form-button.pressed {
  background-color: $color-button-surface-pressed;
}
</style>
