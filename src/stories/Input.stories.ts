// // import { Meta, StoryFn } from '@storybook/vue3';
// import Input from '@/components/input/Input.vue';
// import { ref } from 'vue';

// export default {
//   title: 'Example/Input',
//   component: Input,
//   parameters: {
//     backgrounds: {
//       default: 'dark',
//       values: [
//         { name: 'dark', value: '#333333' },
//         { name: 'light', value: '#ffffff' },
//       ],
//     },
//   },
// } as Meta<typeof Input>;

// const Template1: StoryFn = () => ({
//   components: { Input },
//   setup() {
//     const inputValue = ref('');

//     return { inputValue };
//   },
//   template: `
//     <Input
//       v-model="inputValue"
//     />
//   `,
// });

// const Template2: StoryFn = () => ({
//   components: { Input },
//   setup() {
//     const inputValue = ref('');

//     return { inputValue };
//   },
//   template: `
//     <Input
//       v-model="inputValue"
//       placeholder="Enter text"
//       label="Label"
//       message="This is a help message."
//     />
//   `,
// });

// const Template3: StoryFn = () => ({
//   components: { Input },
//   setup() {
//     const inputValue = ref('');

//     return { inputValue };
//   },
//   template: `
//     <Input
//       v-model="inputValue"
//       placeholder="password"
//       type='password'
//     />
//   `,
// });

// const Template4: StoryFn = () => ({
//   components: { Input },
//   setup() {
//     const inputValue = ref('');

//     return { inputValue };
//   },
//   template: `
//     <Input
//       v-model="inputValue"
//       placeholder="readonly"
//       readonly
//     />
//   `,
// });

// const Template5: StoryFn = () => ({
//   components: { Input },
//   setup() {
//     const inputValue = ref('');

//     const success = () => {
//       return inputValue.value.toString().length > 5;
//     };

//     const error = () => {
//       return inputValue.value.toString().length <= 5;
//     };

//     return { inputValue, success, error };
//   },
//   template: `
//     <Input
//       v-model="inputValue"
//       placeholder="event"
//       :error="error"
//       :success="success"
//     />
//     <Input
//       v-model="inputValue"
//       placeholder="event"
//       :error="error"
//       :success="success"
//     />
//     <Input
//       v-model="inputValue"
//       placeholder="event"
//       :success="success"
//     />
//     <Input
//       v-model="inputValue"
//       placeholder="event"
//       :error="error"
//     />
//   `,
// });

// export const Primary = Template1.bind({});
// export const Helper = Template2.bind({});
// export const Password = Template3.bind({});
// export const ReadOnly = Template4.bind({});
// export const Event = Template5.bind({});
export default {};
