<template>
  <div id="app">
    <viewer ext="jpeg" src="http://test.com/test.jpeg"></viewer>
    <viewer ext="mp4" src="http://test.com/test.mp4"></viewer>
    <viewer ext="mp4" src="http://test.com/test.mp4"></viewer>
    <viewer ext="png" src="http://test.com/test.png"></viewer>
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
