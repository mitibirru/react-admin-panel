import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBY0GH-IfDZWUdp34Ti748wiFuvujic48A",
  authDomain: "admin-panel-d2bfc.firebaseapp.com",
  projectId: "admin-panel-d2bfc",
  storageBucket: "admin-panel-d2bfc.appspot.com",
  messagingSenderId: "848568333446",
  appId: "1:848568333446:web:f14e8779a562ed1f234d07"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
