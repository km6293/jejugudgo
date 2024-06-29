<template>
  <div>
    <p>{{ user.username }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
// import { mockTestApiCode } from '@/api/api';

export default defineComponent({
  name: 'ExampleComponent',
  setup() {
    const user = ref({ username: '', firstName: '', lastName: '' });

    onMounted(async () => {
      // const response = await mockTestApiCode();
      // console.log(response);
      // user.value = response;
    });

    return {
      user,
    };
  },
});
</script>
