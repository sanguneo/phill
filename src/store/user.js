/* eslint-disable no-param-reassign */
import { auth, firestore as db } from 'firebase';

export default {
  state() {
    return {
    };
  },
  getters: {
    serverConfig(state) {
      return state.serverConfig;
    },
  },
  mutations: {
    setColorchip(state, colorchipArray) {
    },
  },
  actions: {
    signup(store, userInfo) {
      auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((userCredential) => {
          db().collection('users')
            .doc(userCredential.user.uid)
            .set({
              id: userCredential.user.uid,
              name: userInfo.name,
              email: userInfo.name,
              type: 1,
              level: 1,
              tel: '',
              interestMakers: [],
              interestTags: [],
            });
        });
    },
  },
};
