<template>
  <div id="viewer">
    <component :is="viewerComponent"></component>
  </div>
</template>

<script>
import viewer from "./viewer";

export default {
  props: ["ext"],
  data() {
    return {
      viewerComponent: viewer.getExtViewer(this.ext)
    };
  }
};
</script>

<style scoped>
</style>
