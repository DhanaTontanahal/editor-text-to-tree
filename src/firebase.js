import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBh_-zK1mZRBbtWV2VsoIjhL3liwNIiMfk",
  authDomain: "testdemo-oct29.firebaseapp.com",
  projectId: "testdemo-oct29",
  storageBucket: "testdemo-oct29.appspot.com",
  messagingSenderId: "60748268657",
  appId: "1:60748268657:web:02f582dd5acc01036087d0",
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
// export const messaging = firebase.messaging();
