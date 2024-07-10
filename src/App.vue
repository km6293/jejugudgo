<template>
  <div id="app">
    <NavBar />
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
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: $color-background;
  display: flex;
  flex-direction: column;
}

#container {
  flex: 1;
  padding: 20px 20px 60px 20px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#container::-webkit-scrollbar {
  display: none;
}
</style>
