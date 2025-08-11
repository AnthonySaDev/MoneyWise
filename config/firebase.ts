import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA_a9LGIyqCsE8kSRbcKtaoYqg1WNNUvfQ",
  authDomain: "moneywise-7eb8f.firebaseapp.com",
  projectId: "moneywise-7eb8f",
  storageBucket: "moneywise-7eb8f.firebasestorage.app",
  messagingSenderId: "777039330673",
  appId: "1:777039330673:web:d3e75c3d2d447c95778ad0",
  measurementId: "G-7Y8BLFB5NX",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
