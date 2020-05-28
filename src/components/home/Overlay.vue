<template>
  <div class="overlay" v-if="open">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: ['open']
}
</script>

<style>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: 2;
  cursor: pointer;
}
</style>
