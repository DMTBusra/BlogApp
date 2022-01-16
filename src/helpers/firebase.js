import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBaDHYkPazt6cmyj3y-TSs1CvRTbjZuSeY",
  authDomain: "blog-app-c13e6.firebaseapp.com",
  projectId: "blog-app-c13e6",
  storageBucket: "blog-app-c13e6.appspot.com",
  messagingSenderId: "591631053202",
  appId: "1:591631053202:web:81f46d60da60c3fe94914b"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);