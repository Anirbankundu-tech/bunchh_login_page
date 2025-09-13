import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ4_CKd9_WL--7YCh7yirMffwv0ooVrlI",
  authDomain: "bunchhh-e1078.firebaseapp.com",
  projectId: "bunchhh-e1078",
  storageBucket: "bunchhh-e1078.firebasestorage.app",
  messagingSenderId: "630887898794",
  appId: "1:630887898794:web:7789787631671dc7e93ad3",
  measurementId: "G-V323SE7EVY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");
export const appleProvider = new OAuthProvider("apple.com");


