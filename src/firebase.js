import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-panel-d2bfc.firebaseapp.com",
  projectId: "admin-panel-d2bfc",
  storageBucket: "admin-panel-d2bfc.appspot.com",
  messagingSenderId: "848568333446",
  appId: "1:848568333446:web:f14e8779a562ed1f234d07"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();