import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const apikey = 'AIzaSyA2pKS0xTDQU41hbd9elCvGTmE4bjESmu4';
const authdomain = 'fourtune-29ea3.firebaseapp.com';
const projectid = 'fourtune-29ea3';
const storagebucket = 'fourtune-29ea3.appspot.com';
const messagingsenderid = '713974043613';
const appid = '1:713974043613:web:85ee75d4ed7e584f565c34';
const measurementid = 'G-P7GWWS6BD1';

// console.log(apikey);

const firebaseConfig = {
    apiKey: apikey,
    authDomain: authdomain,
    projectId: projectid,
    storageBucket: storagebucket,
    messagingSenderId: messagingsenderid,
    appId: appid,
    measurementId: measurementid,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function logOut() {
    return signOut(auth);
}

export function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) =>
            setCurrentUser(user)
        );
        return unSubscribe;
    }, []);

    return currentUser;
}

export { db };
