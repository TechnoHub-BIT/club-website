import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCDFpw7Je6RcwkcugyLeeGuQ9W_9XQOaoY",
  authDomain: "technohub-webtest.firebaseapp.com",
  databaseURL: "https://technohub-webtest.firebaseio.com",
  projectId: "technohub-webtest",
  storageBucket: "technohub-webtest.appspot.com",
  messagingSenderId: "600542744960",
  appId: "1:600542744960:web:f5f6545506b23781c0b165",
  measurementId: "G-LJ1HYX8YRP"
});

const auth = firebase.auth();

export {auth}; 