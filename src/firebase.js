import firebase from "firebase/app";

import "firebase/auth"; // for authentication
// import 'firebase/storage';     // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging
// import 'firebase/functions';   // for cloud functions
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCDFpw7Je6RcwkcugyLeeGuQ9W_9XQOaoY",
  authDomain: "technohub-webtest.firebaseapp.com",
  databaseURL: "https://technohub-webtest.firebaseio.com",
  projectId: "technohub-webtest",
  storageBucket: "technohub-webtest.appspot.com",
  messagingSenderId: "600542744960",
  appId: "1:600542744960:web:f5f6545506b23781c0b165",
  measurementId: "G-LJ1HYX8YRP",
});

const auth = firebase.auth();
const db = firebaseApp.firestore();
// export default firebaseApp;
export { auth, firebaseApp, db };
