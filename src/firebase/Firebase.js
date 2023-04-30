import firebase from 'firebase';
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZHfZYli2mHH1z2GBgfEVjKg2dR_T8SPc",
    authDomain: "rnfirebase-baa8f.firebaseapp.com",
    projectId: "rnfirebase-baa8f",
    storageBucket: "rnfirebase-baa8f.appspot.com",
    messagingSenderId: "166278600244",
    appId: "1:166278600244:web:d1b38aa117f9fa06af9c61"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  

export default firebase;