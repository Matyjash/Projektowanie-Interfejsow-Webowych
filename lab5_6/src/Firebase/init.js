// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz6qw6LXIMltR1Wk54_o87aVJflFdz-n4",
  authDomain: "piwo-4cc29.firebaseapp.com",
  projectId: "piwo-4cc29",
  storageBucket: "piwo-4cc29.appspot.com",
  messagingSenderId: "1059908113189",
  appId: "1:1059908113189:web:6de4c9ba8885631c3b40cc",
  measurementId: "G-XY61YKS1T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
onAuthStateChanged(auth, (user) =>{
  if(user){
    const uid =user.uid;
    user.displayName = user.email
    alert("user signed in")
  }else{
  }
});
export const firestore = getFirestore(app);


