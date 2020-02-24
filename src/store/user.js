/* eslint-disable no-param-reassign */
import { auth, db, storage } from '../shared/firebase';

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
      auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((userCredential) => {
          console.log(userCredential);
          store.commit('setMemberLayer', '');
        });
    },
    signup(store, userInfo) {
      const auths = auth();
      auths.createUserWithEmailAndPassword(userInfo.email, userInfo.password)
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
          auths.currentUser.sendEmailVerification();
          store.commit('setMemberLayer', '');
        });
    },
  },
};
