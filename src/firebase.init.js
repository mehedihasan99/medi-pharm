// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFxHLChaaG61FMjeKe1pRQv007nTIyxQo",
    authDomain: "medi-pharm.firebaseapp.com",
    projectId: "medi-pharm",
    storageBucket: "medi-pharm.appspot.com",
    messagingSenderId: "461283490742",
    appId: "1:461283490742:web:bcb7c2d685104ec47d1f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;