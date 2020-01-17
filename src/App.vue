<template>
  <div id="app">
    <button @click="toggle('imgviewer')">toggle img</button>
    <button @click="toggle('videoviewer')">toggle video</button>
    <button @click="toggle('audioviewer')">toggle audio</button>

    <viewer
      ref="imgviewer"
      class="viewer"
      title="test.jpeg"
      ext="jpeg"
      src="https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1350&q=80"
    ></viewer>
    <viewer
      ref="videoviewer"
      title="test.mp4"
      ext="mp4"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    ></viewer>
    <viewer
      ref="audioviewer"
      title="test.mp3"
      class="viewer"
      ext="mp3"
      src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
    ></viewer>
  </div>
</template>

<script>
import Viewer from "./components/viewer/Viewer.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
  name: "app",
  components: {
    Viewer
  },
  methods: {
    toggle(name) {
      this.$refs[name].toggle();
    }
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

.viewer {
  display: none;
}
</style>
