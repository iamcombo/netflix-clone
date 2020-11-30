import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// to somehow seed the database

// a config here
const config = {
  apiKey: "AIzaSyBLivMDjjc-lh6Y_x6KEPRxcC8ExbaBL4M",
  authDomain: "netflix-clone-6f077.firebaseapp.com",
  databaseURL: "https://netflix-clone-6f077.firebaseio.com",
  projectId: "netflix-clone-6f077",
  storageBucket: "netflix-clone-6f077.appspot.com",
  messagingSenderId: "4585709660",
  appId: "1:4585709660:web:0b18704daeb0dc49758699"
};
const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };