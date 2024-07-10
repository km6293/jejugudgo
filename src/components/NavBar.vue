<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
nav {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  padding: 15px 0 15px 0;
  text-align: center;
  min-width: 280px;
  max-width: 768px;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      color: #42b983;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
