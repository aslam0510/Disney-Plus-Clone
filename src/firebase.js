import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6Zgz1SoU9lBIT6HZ_7HEkAo8xIlxP9hs",
  authDomain: "disney-plus-clone-eb458.firebaseapp.com",
  projectId: "disney-plus-clone-eb458",
  storageBucket: "disney-plus-clone-eb458.appspot.com",
  messagingSenderId: "61404363853",
  appId: "1:61404363853:web:f88b4ab5766c5f54bff004"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider, storage,firebaseApp};
export default db