import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAhYxp5XGt-r7krFCFC0jCLhSG8y5Y50wc",
  authDomain: "kimcweb-cfc07.firebaseapp.com",
  databaseURL: "https://kimcweb-cfc07.firebaseio.com",
  projectId: "kimcweb-cfc07",
  storageBucket: "kimcweb-cfc07.appspot.com",
  messagingSenderId: "338768421046"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
