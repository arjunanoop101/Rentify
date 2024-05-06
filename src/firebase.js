
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD8xan4rEummGVF-6Ku-u5OiXYf5x4mduU",
  authDomain: "rentify-1d037.firebaseapp.com",
  projectId: "rentify-1d037",
  storageBucket: "rentify-1d037.appspot.com",
  messagingSenderId: "1094952546157",
  appId: "1:1094952546157:web:1aafcce26aa70541f3b464"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const imgDB = getStorage(app);
const productDB = getFirestore(app);
export {app,auth,imgDB,productDB};