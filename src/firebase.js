import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyCaYA8O-iIXYjxB0h5bef7w_b3sK0oYABU",
  
    authDomain: "chaldalclone.firebaseapp.com",
  
    projectId: "chaldalclone",
  
    storageBucket: "chaldalclone.appspot.com",
  
    messagingSenderId: "885726390603",
  
    appId: "1:885726390603:web:f6ecd107e58c576683a0ce",
  
    measurementId: "G-EKBW7X4WM9"
  
  };
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  export {auth , firebase};