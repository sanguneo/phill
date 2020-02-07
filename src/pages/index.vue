<template>
  <div class="container">
    <StackPaper />
  </div>
</template>

<script>

import StackPaper from "../components/StackPaper";

export default {
  components: {
    StackPaper
  }
}
</script>

<style>
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
  height: calc(100% - 50px);
  width: 1024px;
  margin: 0 calc(50% - 512px);
}
</style>

