<template>
  <div id="app">
    <viewer ext="jpeg"></viewer>
    <viewer ext="mp4"></viewer>
    <viewer ext="mp4"></viewer>
  </div>
</template>

<script>
import Viewer from "./components/viewer/Viewer.vue";

export default {
  name: "app",
  components: {
    Viewer
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
