import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDkZC0cDPt2fsRsLp9Fon1VOECVt3EV8L0",
    authDomain: "crwn-db-9b616.firebaseapp.com",
    databaseURL: "https://crwn-db-9b616-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crwn-db-9b616",
    storageBucket: "crwn-db-9b616.appspot.com",
    messagingSenderId: "458686771420",
    appId: "1:458686771420:web:b2d1a8fd2e4dbc8cd98419"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
