// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAKKhut-52rKmooLNjvNt1ui5MkZDzuDc",
    authDomain: "asistenciapp-duoc.firebaseapp.com",
    projectId: "asistenciapp-duoc",
    storageBucket: "asistenciapp-duoc.appspot.com",
    messagingSenderId: "743402093163",
    appId: "1:743402093163:web:fdc32d5d765a6c1293cf2e",
    measurementId: "G-HW2Y7J02YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);