// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPN8M6x5f3HnvuIqN9_0ufAj2uthDbLOI",
  authDomain: "coderhouse-react-8c292.firebaseapp.com",
  projectId: "coderhouse-react-8c292",
  storageBucket: "coderhouse-react-8c292.appspot.com",
  messagingSenderId: "150244588943",
  appId: "1:150244588943:web:87908b6f4dd9e1595edffa",
  measurementId: "G-DDP9R03WS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db