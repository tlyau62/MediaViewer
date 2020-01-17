<template>
  <div>
    <p>video src {{src}}</p>
    <video playsinline controls>
      <source :src="src" />
    </video>
  </div>
</template>

<script>
import Plyr from "plyr";
import $ from "jquery";

export default {
  props: ["src"],
  mounted() {
    new Plyr($(this.$el).find("video")[0]);
  }
};
</script>