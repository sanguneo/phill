/* eslint-disable no-param-reassign */


import { auth, firestore } from 'firebase';

export default {
  state() {
    return {
      memberLayer: '',
      user: null,
    };
  },
  getters: {
    memberLayer(state) {
      return state.memberLayer;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setMemberLayer(state, memberLayer) {
      state.memberLayer = memberLayer;
    },
    setUser(state, user) {
      state.user = user;
      window.sessionStorage.toslabUser = JSON.stringify(user);
    },
  },
  actions: {
    login(store, userInfo) {
      auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((userCredential) => {
          firestore().collection('users')
            .doc(userCredential.user.uid)
            .get()
            .then(doc => doc.data())
            .then((user) => {
              store.commit('setUser', user);
              store.commit('setMemberLayer', '');
            });
        });
    },
    signup(store, userInfo) {
      auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((userCredential) => {
          firestore().collection('users')
            .doc(userCredential.user.uid)
            .set({
              name: userInfo.name,
              email: userInfo.email,
              type: userInfo.type,
              level: 1,
              tel: userInfo.tel,
              interestMakers: null,
              interestTags: null,
            });
          auths.currentUser.sendEmailVerification();
          store.commit('setMemberLayer', '');
        });
    },
  },
};
