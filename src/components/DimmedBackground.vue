<template>
  <div class="dimmedBackground">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DimmedBackground',
};
</script>

<style lang="scss">
  .dimmedBackground {
    z-index: 3;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .3);
  }
</style>
