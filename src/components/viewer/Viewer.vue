<template>
  <div id="viewer">
    <component :is="viewerComponent" :src="src"></component>
  </div>
</template>

<script>
import viewer from "./viewer";
import "plyr/dist/plyr.css";

export default {
  props: ["ext", "src"],
  data() {
    return {
      viewerComponent: viewer.getExtViewer(this.ext)
    };
  }
};
</script>

<style scoped>
</style>
