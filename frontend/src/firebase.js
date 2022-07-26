// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: env.process.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const register = async (email,password) => {
  try {
    const {user} = await createUserWithEmailAndPassword(auth,email,password);
    return user
  }
  catch(err){
    console.log(err.message);
  }
 
}

export const login = async (email,password) => {
  try {
    const {user} = await signInWithEmailAndPassword(auth,email,password);
    return user
  }
  catch(err){
    console.log(err.message);
  }
 
}

export const logout = async () => {
  try {
    signOut(auth);
    return true;
  }
  catch(err){
    console.log(err.message);
  }
 
}



export default app;