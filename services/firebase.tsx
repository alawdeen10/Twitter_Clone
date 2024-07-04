// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN_MIi8aqZzGu_uzFyDmLjQQ-KvkLFNHY",
  authDomain: "react-native-auth-df586.firebaseapp.com",
  projectId: "react-native-auth-df586",
  storageBucket: "react-native-auth-df586.appspot.com",
  messagingSenderId: "553358691610",
  appId: "1:553358691610:web:5da6f363fb8a1b06bb30a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
