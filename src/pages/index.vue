<template>
  <div class="container">
    <StackPaper />
  </div>
</template>

<script>

import firebase from 'firebase';
import StackPaper from '../components/StackPaper.vue';

export default {
  components: {
    StackPaper,
  },
  mounted() {
    firebase.firestore().collection('inform')
      .get()
      .then(({ docs }) => docs.map(doc => doc.data()))
      .then(console.log);
  },
};
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

