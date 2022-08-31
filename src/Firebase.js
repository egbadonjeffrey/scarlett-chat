import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFFB0baZlNqUGUC245qCHkqfzJJhjZuos",
  authDomain: "scarlett-chat-61fb7.firebaseapp.com",
  projectId: "scarlett-chat-61fb7",
  storageBucket: "scarlett-chat-61fb7.appspot.com",
  messagingSenderId: "1034078401859",
  appId: "1:1034078401859:web:a92b313b07da39439babf6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
