<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
nav {
  background: #333;
  color: white;
  padding: 1em;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 1em;
}

li {
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}
</style>
