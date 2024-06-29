<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <ExampleComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleComponent from '@/components/ExampleComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    ExampleComponent,
  },
});
</script>
