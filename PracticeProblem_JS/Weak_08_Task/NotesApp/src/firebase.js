
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDtEZnC_AudtE7KXSjeSVygwMRUxDpX9t0",
  authDomain: "notesapp-react-71398.firebaseapp.com",
  projectId: "notesapp-react-71398",
  storageBucket: "notesapp-react-71398.appspot.com",
  messagingSenderId: "572573434308",
  appId: "1:572573434308:web:a12e6c9b73d0fa6df42491",
  measurementId: "G-5P2FED795P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
const notesCollection = collection(db, "notes")