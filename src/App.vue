<template>
  <div id="app">
    <router-view />
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  position: relative;
  max-width: 360px;
  margin: 0 auto;
  width: 100%;
}
</style>
