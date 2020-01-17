<template>
  <div id="image-viewer">
    <img class="img-fluid" :src="src" />
    <div class="toolbar">
      <button class="btn">
        <i class="fas fa-undo" style="color: white;"></i>
      </button>
      <button class="btn">
        <i class="fas fa-search-plus" style="color: white;"></i>
      </button>
      <button class="btn">
        <i class="fas fa-undo fa-flip-horizontal" style="color: white;"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style>
#image-viewer {
  display: flex;
  flex-direction: column;
}

.toolbar {
  text-align: center;
}
</style>