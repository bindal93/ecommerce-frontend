import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBeTDlIcO6pMdEyQHWo4UYgvCSlJm3iF-U",
  authDomain: "fir-auth-server-daf0f.firebaseapp.com",
  projectId: "fir-auth-server-daf0f",
  storageBucket: "fir-auth-server-daf0f.appspot.com",
  messagingSenderId: "90821311961",
  appId: "1:90821311961:web:b32db613a069cdbe036dc8",
  measurementId: "G-MJYZSVWPZ2",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
