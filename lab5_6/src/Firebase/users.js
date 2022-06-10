import React from "react";
import { auth, firestore } from "./init";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    FacebookAuthProvider,
} from "firebase/auth";
import {
    setDoc,
    getDoc,
    doc,
    } from "firebase/firestore";
import { async } from "@firebase/util";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
         const user = response.user;
         const q = doc(firestore, "users", user.uid);
         const docs = await getDoc(q);
         if ( ! docs.exists()) {
             await setDoc(q, {
                 name: user.displayName,
                 authProvider: "google",
                 email: user.email
             });
         }

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

export const loginWithFacebook = async () =>{
    try{
        const response = await signInWithPopup(auth, facebookProvider);
        const user = response.user;
        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if(! docs.exists()){
            await setDoc(q, {
                name: user.displayName,
                authProvider: "facebook",
                email: user.email
            }
            );
        }
    } catch (err){
        console.error({err});
        alert(err.message);
    }
}



export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


export const logout = () => {
    signOut(auth);
};


export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
    };
