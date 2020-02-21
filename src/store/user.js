/* eslint-disable no-param-reassign */
import { auth, firestore as db } from 'firebase';

export default {
  state() {
    return {
      memberLayer: '',
    };
  },
  getters: {
    memberLayer(state) {
      return state.memberLayer;
    },
  },
  mutations: {
    setMemberLayer(state, memberLayer) {
      state.memberLayer = memberLayer;
    },
  },
  actions: {
    login(store, userInfo) {
      console.log(userInfo);
      store.commit('setMemberLayer', '');
    },
    signup(store, userInfo) {
      auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((userCredential) => {
          db().collection('users')
            .doc(userCredential.user.uid)
            .set({
              id: userCredential.user.uid,
              name: userInfo.name,
              email: userInfo.email,
              type: userInfo.type,
              level: 1,
              tel: userInfo.tel,
              interestMakers: null,
              interestTags: null,
            });
          store.commit('setMemberLayer', '');
        });
    },
  },
};
