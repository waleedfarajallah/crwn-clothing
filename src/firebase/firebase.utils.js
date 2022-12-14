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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
    // console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
