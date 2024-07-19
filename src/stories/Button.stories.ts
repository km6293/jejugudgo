// import { Meta, StoryFn } from '@storybook/vue3';
// import Button from '@/components/button/Button.vue';
// import { IButtonType } from '@/components/button/ButtonTypes';
// import { AddIcon } from '@/components/icons/basic';

// // 예시
// // <Button
// //   disabled
// //   text="test"
// //   :style="{ width: '200px' }"
// //   :icon="Add"
// // />

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     type: { control: 'select', options: ['submit', 'reset'] },
//     disabled: { control: 'boolean' },
//     text: { control: 'text' },
//     icon: { control: 'select', options: [''] },
//     style: { control: 'object' },
//   },
// } as Meta<typeof Button>;

// const Template: StoryFn<IButtonType> = (args) => ({
//   components: { Button },
//   setup() {
//     return { args };
//   },
//   template: '<Button v-bind="args" />',
// });

// export const Primary = Template.bind({});
// Primary.args = {
//   text: 'Primary Button',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   type: 'submit',
//   disabled: true,
//   text: 'Disabled Button',
// };

// export const WithIcon = Template.bind({});
// WithIcon.args = {
//   type: 'reset',
//   text: 'Button with Icon',
//   icon: AddIcon,
// };
export default {};
