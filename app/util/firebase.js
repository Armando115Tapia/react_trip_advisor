import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDmOfEoxNXXwoxDmVcSz8HIfI0v0uGSM4Y',
  authDomain: 'tenedores-c1e8d.firebaseapp.com',
  databaseURL: 'https://tenedores-c1e8d.firebaseio.com',
  projectId: 'tenedores-c1e8d',
  storageBucket: 'tenedores-c1e8d.appspot.com',
  messagingSenderId: '5165163134',
  appId: '1:5165163134:web:f1aa38180430131e592e2f',
};
// Initialize Firebase

export const firebaseApp = firebase.initializeApp(firebaseConfig);
