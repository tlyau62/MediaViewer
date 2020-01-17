<template>
  <div>
    <audio playsinline controls>
      <source :src="src" />
    </audio>
  </div>
</template>

<script>
import Plyr from "plyr";
import $ from "jquery";

export default {
  props: ["src"],
  mounted() {
    new Plyr($(this.$el).find("audio")[0]);
  }
};
</script>