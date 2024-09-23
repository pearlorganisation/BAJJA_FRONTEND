
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyBsPeQfJ_UeXKKAJfyTlYXkluzlmq6_uOc",
    authDomain: "gogoa-4d569.firebaseapp.com",
    projectId: "gogoa-4d569",
    storageBucket: "gogoa-4d569.appspot.com",
    messagingSenderId: "24128045744",
    appId: "1:24128045744:web:321c67c5794f80b2c4b175",
    measurementId: "G-J74MJDCFTK"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Authentication
const db = getFirestore(app); // Firestore
const messaging = getMessaging(app); // FCM

export { auth, db, messaging, analytics };