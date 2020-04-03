<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="user">{{ user? user.name : null }}</div>
    <div class="date">{{ (updated || created) | timeToDate }}</div>
    <div class="images">
      <img v-for="image in images" :key="image[0]" :src="image[1]" :alt="image[0]">
    </div>
    <div class="content">{{ content }}</div>
    <div class="tags">{{ tags.join(',') }}</div>
  </div>
</template>

<script>
import moment from 'moment';
import { firestore, storageRef } from '../../shared/firebase';

export default {
  name: 'Item',
  filters: {
    timeToDate(value) {
      if (!value) return '';
      return moment(value).format('YYYY. MM. DD');
    },
  },
  data() {
    return {
      title: '',
      content: '',
      images: [],
      tags: [],
      created: 0,
      updated: 0,
      user: null,
    };
  },
  mounted() {
    this.getDoc('catalog', this.$route.params.id);
  },
  methods: {
    getDoc(collection, docid) {
      firestore().collection(collection)
        .doc(docid)
        .get()
        .then(data => ({ id: data.id, ...data.data() }))
        .then((doc) => {
          Promise.all([
            Promise.all([...doc.images.map(image => storageRef.child(image).getDownloadURL())]),
            firestore().collection('users')
              .doc(doc.user)
              .get()
              .then(user => user.data()),
          ]).then(([images, user]) => {
            doc.images = doc.images.map((path, idx) => ([path, images[idx]]));
            doc.user = user;
            Object.assign(this, doc);
          });
        });
    },
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

