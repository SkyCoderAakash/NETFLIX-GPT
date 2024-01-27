// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDM6SKRimjNss9ik5fBf8vkCfZDsOc0To4",
//   authDomain: "netflixgpt-c9934.firebaseapp.com",
//   projectId: "netflixgpt-c9934",
//   storageBucket: "netflixgpt-c9934.appspot.com",
//   messagingSenderId: "652600620164",
//   appId: "1:652600620164:web:6d4c3dac523cbe4217fed1",
//   measurementId: "G-MW5EPNFD9M"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBPL4Ovu-p8pe1ZICxyTYhnvLwc3iehWjI",
  authDomain: "netflix-gpt-969a4.firebaseapp.com",
  projectId: "netflix-gpt-969a4",
  storageBucket: "netflix-gpt-969a4.appspot.com",
  messagingSenderId: "428975946447",
  appId: "1:428975946447:web:e1dee8db81b802778855ba",
  measurementId: "G-V9RCP69YVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();