<template>
  <div id="viewer" v-show="show">
    <div id="viewer-header">
      <button type="button" class="btn" @click="show=false">
        <i class="fas fa-arrow-left"></i>
      </button>
      <span class="title">{{title}}</span>
      <span>
        <button type="button" class="btn">
          <i class="fas fa-download"></i>
        </button>
      </span>
    </div>
    <div id="viewer-wrapper" class="container">
      <component :is="viewerComponent" :src="src"></component>
    </div>
  </div>
</template>

<script>
import viewer from "./viewer";
import "plyr/dist/plyr.css";

export default {
  props: ["title", "ext", "src"],
  data() {
    return {
      viewerComponent: viewer.getExtViewer(this.ext),
      show: false
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
#viewer {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
}

#viewer .btn:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

#viewer-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

#viewer-header {
  display: flex;
  align-items: center;
}

#viewer-header .btn > i {
  color: white;
}

#viewer-header .title {
  flex: 1;
}
</style>
