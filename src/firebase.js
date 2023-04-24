// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ0TDa_qTn4dgaOY530gAu35MkoAZ4_p0",
  authDomain: "fir-fodo-app.firebaseapp.com",
  projectId: "fir-fodo-app",
  storageBucket: "fir-fodo-app.appspot.com",
  messagingSenderId: "668494432459",
  appId: "1:668494432459:web:64dde6d858ac251fe7334e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
