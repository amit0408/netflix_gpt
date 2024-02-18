// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9S2c5WzIqmfphGj0MqZ01zIRy3vkDrrE",
  authDomain: "netflix-gpt-52998.firebaseapp.com",
  projectId: "netflix-gpt-52998",
  storageBucket: "netflix-gpt-52998.appspot.com",
  messagingSenderId: "521589140855",
  appId: "1:521589140855:web:7bb42eebadfa24fb384572",
  measurementId: "G-QSX5KC7SQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);