import firebase from 'firebase';

export const { auth, storage, firestore } = firebase;
export const storageRef = storage().ref();

export default firebase;
