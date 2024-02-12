import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBH_KZB0pYkXOydju8MVnq2qNvY_wyf308",
    authDomain: "ngo-bbdfe.firebaseapp.com",
    projectId: "ngo-bbdfe",
    storageBucket: "ngo-bbdfe.appspot.com",
    messagingSenderId: "725251508348",
    appId: "1:725251508348:web:bed777bf20a42d4eaa61f9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
