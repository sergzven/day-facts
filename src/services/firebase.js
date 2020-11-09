import firebase from "firebase";
import { errorHandler } from "../helpers/helpers";

const config  = {
    apiKey: "AIzaSyBS1LIEXmzS6mssoPWlsQIZII0Z06_PiNs",
    authDomain: "areiapp-a9e77.firebaseapp.com",
    databaseURL: "https://areiapp-a9e77.firebaseio.com",
    projectId: "areiapp-a9e77",
    storageBucket: "areiapp-a9e77.appspot.com",
    messagingSenderId: "783975000468",
    appId: "1:783975000468:web:7fbd6a16d8decb47564781",
    measurementId: "G-6YKHH1YCMJ"
}

firebase.initializeApp(config)

const auth = firebase.auth();
const db = firebase.database();


export const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
}

export const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}

export const resetPassword = email => {
    return auth.sendPasswordResetEmail(email);
}

export const confirmResetPassword = (code, newPassword) => {
    return auth.confirmPasswordReset(code, newPassword);
}

export const verifyResetPasswordCode = (code) => {
    return auth.verifyPasswordResetCode(code);
}

export const signOut = () => {
    return auth.signOut();
}
