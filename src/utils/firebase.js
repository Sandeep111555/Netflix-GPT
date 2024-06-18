// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdTVmLqHYAOPtgoQK8BWIcoE37RbrkP-U",
  authDomain: "netflixgpt-dc39b.firebaseapp.com",
  projectId: "netflixgpt-dc39b",
  storageBucket: "netflixgpt-dc39b.appspot.com",
  messagingSenderId: "775566185615",
  appId: "1:775566185615:web:96ac2adc7f8b58910f0cfa",
  measurementId: "G-CPCT96SEWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);