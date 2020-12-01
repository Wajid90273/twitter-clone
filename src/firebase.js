import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpD_8RG8koNP2bhQ-ebWsrJ9Cs_kEYX38",
  authDomain: "twitter-clone-10688.firebaseapp.com",
  databaseURL: "https://twitter-clone-10688.firebaseio.com",
  projectId: "twitter-clone-10688",
  storageBucket: "twitter-clone-10688.appspot.com",
  messagingSenderId: "579097177112",
  appId: "1:579097177112:web:7c3239988fd5ec67d4276d",
  measurementId: "G-LR9FRLJ02J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
