<template>
  <div id="app">
    <NavBar v-if="!$route.meta.hideNavBar" />
    <div id="container">
      <router-view />
    </div>
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
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
}

#container {
  flex: 1;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#container::-webkit-scrollbar {
  display: none;
}
</style>
