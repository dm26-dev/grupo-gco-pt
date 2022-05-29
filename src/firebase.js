import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4acwtbyn3lqLAMfr87tiUDEtRXroDcvk",
    authDomain: "react-fb-auth-ab8a2.firebaseapp.com",
    projectId: "react-fb-auth-ab8a2",
    storageBucket: "react-fb-auth-ab8a2.appspot.com",
    messagingSenderId: "978655565419",
    appId: "1:978655565419:web:72eb3f0c55cf5c8c3bc32e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)