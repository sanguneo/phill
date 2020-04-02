<template>
  <div class="container">
    제품목록
  </div>
</template>

<script>
import { auth, firestore, storage } from '../../shared/firebase';

export default {
  name: 'Item',
  components: {
  },
  mounted() {
    firestore().collection('catalog')
      .orderBy('created', 'desc')
      .get()
      .then(({ docs: [doc] }) => doc.id);
    // eslint-disable-next-line no-return-await
    // .then(async querySnapshot => await Promise.all(querySnapshot.docs.map(doc => doc.data())));
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

