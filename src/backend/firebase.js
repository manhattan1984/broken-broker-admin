// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDmdLWaJmvzeXI88kMMwW4oy-t-v097U6M",
  authDomain: "broken-broker-bf9dd.firebaseapp.com",
  projectId: "broken-broker-bf9dd",
  storageBucket: "broken-broker-bf9dd.appspot.com",
  messagingSenderId: "48483472555",
  appId: "1:48483472555:web:c5f1a9b03056cfb6c213ee",
  measurementId: "G-EDCE3V6FVH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
