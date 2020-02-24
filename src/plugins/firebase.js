import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCmT3E3qlGQ5X1psNOIOofQP_czDDFeEcE',
  authDomain: 'tos-lab.firebaseapp.com',
  databaseURL: 'https://tos-lab.firebaseio.com',
  projectId: 'tos-lab',
  storageBucket: 'tos-lab.appspot.com',
  messagingSenderId: '219310362548',
  appId: '1:219310362548:web:ad3172f1e7ebe0364eece1',
  measurementId: 'G-M79B5EJNEC',
};
// const app = firebase.apps.length
//   ? firebase.app()
firebase.initializeApp(firebaseConfig);

// firebase.analytics();
