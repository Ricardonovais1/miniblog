import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAd_0EBapWDwv-CY6CCXA3Qr-hIGS9kVSA",
  authDomain: "mini-blog-21044.firebaseapp.com",
  projectId: "mini-blog-21044",
  storageBucket: "mini-blog-21044.appspot.com",
  messagingSenderId: "534715609012",
  appId: "1:534715609012:web:12e5a38585577912dc4ce1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }