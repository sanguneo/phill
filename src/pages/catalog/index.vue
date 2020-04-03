<template>
  <div class="container">
    제품목록
    <ul>
      <li v-for="item in list">
        <img :src="item.thumbnail" alt="" />
        <div>{{ item.title }}</div>
        <div>{{ item.user.name }}</div>
        <div>{{ (item.updated || item.created) | timeToDate }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
import { auth, firestore, storageRef } from '../../shared/firebase';

export default {
  name: 'Item',
  filters: {
    timeToDate(value) {
      if (!value) return '';
      return moment(value).format('YYYY. MM. DD');
    },
  },
  components: {
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    firestore().collection('catalog')
      .orderBy('created', 'desc')
      .get()
      .then(({ docs }) => {
        this.list = docs.map((doc) => {
          const data = doc.data();
          Promise.all([
            storageRef.child(data.thumbnail).getDownloadURL(),
            firestore().collection('users')
              .doc(data.user)
              .get()
              .then(user => user.data()),
          ]).then(([thumbnail, user]) => {
            data.thumbnail = thumbnail;
            data.user = user;
          });
          return data;
        });
      });
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

