import Button from '@/components/Button.vue';
import Add from '@/components/icons/basic/Add.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
    padding: { control: 'text' },
    fontSize: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">test</Button>',
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  width: '',
  height: '50px',
  padding: '16px',
  fontSize: '1.6rem',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  width: '200px',
  height: '50px',
  padding: '16px',
  fontSize: '1.6rem',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  disabled: false,
  width: '200px',
  height: '50px',
  padding: '16px',
  fontSize: '1.6rem',
};

WithIcon.decorators = [
  () => ({
    template: `
        <template #icon>
          <Add />
        </template>
        test
    `,
  }),
];
