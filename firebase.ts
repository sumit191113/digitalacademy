import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

/**
 * Firebase Configuration for SCGM Academy
 * Provided by the institution's Firebase Console
 */
const firebaseConfig = {
  apiKey: "AIzaSyBPDiVQ5VmrOsFcwugAgpZ4Jivat4meaa8",
  authDomain: "scac-ea04a.firebaseapp.com",
  projectId: "scac-ea04a",
  storageBucket: "scac-ea04a.firebasestorage.app",
  messagingSenderId: "292568400271",
  appId: "1:292568400271:web:9f04a84ceb4241a34e4bfa",
  measurementId: "G-NM84GDXF78"
};

// 1. Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 2. Safely Initialize Analytics
// We use a let variable and an async check to handle environments 
// where tracking might be blocked or unsupported.
let analytics = null;

const startAnalytics = async () => {
  if (typeof window !== 'undefined') {
    try {
      const supported = await isSupported();
      if (supported) {
        analytics = getAnalytics(app);
        console.log("Firebase Analytics initialized successfully.");
      }
    } catch (err) {
      console.warn("Firebase Analytics could not be initialized:", err);
    }
  }
};

startAnalytics();

export { app, analytics };