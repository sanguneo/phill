<template>
  <div class="header">
    <div id="brand">TOS</div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  mounted() {
    // console.log(firebase);
  },
};
</script>

<style lang="scss">
.header {
  box-sizing: border-box;
  border-bottom: 1px solid black;
  height: 50px;
  padding: 0 calc(50% - 512px);
  position: relative;
  & > #brand {
    height: 100%;
    line-height: 50px;
  }
}
</style>

