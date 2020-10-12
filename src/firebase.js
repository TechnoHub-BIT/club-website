import firebase from "firebase/app";

import "firebase/auth"; // for authentication
// import 'firebase/storage';     // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging
// import 'firebase/functions';   // for cloud functions
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHtL3pN1p8KzvI24Bp40YUpHR4uKs3PGw",
  authDomain: "technohub-web.firebaseapp.com",
  databaseURL: "https://technohub-web.firebaseio.com",
  projectId: "technohub-web",
  storageBucket: "technohub-web.appspot.com",
  messagingSenderId: "112818585976",
  appId: "1:112818585976:web:5016a114ee83613709c88d",
  measurementId: "G-0QLV7TLK08"
});

const auth = firebase.auth();
const db = firebaseApp.firestore();
// export default firebaseApp;
export { auth, firebaseApp, db };
