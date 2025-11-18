import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAtphqxu0c4NYvs9RwlxlYL7iGooKUoJ5I",
    authDomain: "signup-or-login-11148.firebaseapp.com",
    projectId: "signup-or-login-11148",
    storageBucket: "signup-or-login-11148.firebasestorage.app",
    messagingSenderId: "636777654043",
    appId: "1:636777654043:web:1a6a63dd085e07fe0f55be",
    measurementId: "G-9Z7ZDG1FCW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, doc, setDoc, db };

