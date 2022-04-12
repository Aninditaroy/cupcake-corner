// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNYw7arXMR4w3G9_N6jm-X3l5uTWG4aew",
    authDomain: "cupcake-corner.firebaseapp.com",
    projectId: "cupcake-corner",
    storageBucket: "cupcake-corner.appspot.com",
    messagingSenderId: "355850953068",
    appId: "1:355850953068:web:58ea4b1689531d2fbbd349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;