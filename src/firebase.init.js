// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAgEAakCT_aUdZObKJLSN2moaoF_GCUHE0",
authDomain: "creative-studio-photography.firebaseapp.com",
projectId: "creative-studio-photography",
storageBucket: "creative-studio-photography.appspot.com",
messagingSenderId: "198527421029",
appId: "1:198527421029:web:3340b5673dcc4328f0548c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;