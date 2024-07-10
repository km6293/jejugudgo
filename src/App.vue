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
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: $color-background;
}
</style>
