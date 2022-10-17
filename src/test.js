import firebase from "firebase/compat";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('4p4Sy5tcYylpoyR7NtMv').collection('cartItems').doc('zkVcmTabaxfJ0zBIDuRa')
firestore.doc('/users/4p4Sy5tcYylpoyR7NtMv/cartItems/zkVcmTabaxfJ0zBIDuRa');
firestore.collection('/users/4p4Sy5tcYylpoyR7NtMv/cartItems');