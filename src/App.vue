<template>
  <div id="nav">
    <!-- <router-link to="/login">login</router-link> -->
    <router-view />
  </div>
</template>
<script lang="ts">
export default {
  // mounted() {
  //   const tmp = document.querySelector("body");
  //   if (tmp) {
  //     tmp.setAttribute("style", "background-color:#e7f0fd");
  //   }
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* * {
  background-image: linear-gradient(
    -225deg,
    #7085b6 0%,
    #87a7d9 50%,
    #def3f8 100%
  );
} */
/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
