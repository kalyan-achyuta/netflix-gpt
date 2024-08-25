// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeGLRAf7ILIlDntNKYHrHTaQgcl_H33iw",
  authDomain: "netflixgpt-e65c6.firebaseapp.com",
  projectId: "netflixgpt-e65c6",
  storageBucket: "netflixgpt-e65c6.appspot.com",
  messagingSenderId: "360791500932",
  appId: "1:360791500932:web:73be820b081516cdaf7ad1",
  measurementId: "G-GSBFT7C69H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
