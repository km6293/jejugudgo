import Button from '../components/Button.vue';
import { Meta, StoryFn } from '@storybook/vue3';
import { IButtonType } from '../components/Button.vue';
import Add from '@/components/icons/basic/Add.vue';

// 예시
// <Button
//   text="Click Me"
//   :icon="Add"
//   :style="{ width: '200px' }"
//   @click="handleSecondButtonClick"
// />

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: { control: 'select', options: ['submit', 'reset'] },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
    icon: { control: 'select', options: [''] },
    style: { control: 'object' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<IButtonType> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'submit',
  disabled: true,
  text: 'Disabled Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  type: 'reset',
  text: 'Button with Icon',
  icon: Add,
};
