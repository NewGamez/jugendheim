import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWn3eOlZGlXjzwKC0IK2SDjrsVhg1BtbI",
  authDomain: "jugendheim-14aa9.firebaseapp.com",
  projectId: "jugendheim-14aa9",
  storageBucket: "jugendheim-14aa9.firebasestorage.app",
  messagingSenderId: "388230097776",
  appId: "1:388230097776:web:b2325e7435ef5f85c8fdb5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
