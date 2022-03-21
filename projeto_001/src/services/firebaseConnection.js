import firebase from "firebase/compat/app"; //v9 do firebase
import "firebase/compat/auth";  //v9 do firebase
import "firebase/compat/firestore";//v9 do firebase
 
const firebaseConfig = {
    apiKey: "AIzaSyCZu2QO-KSPjXYSqyhIqkPLg38AacKvCjk",
    authDomain: "sistema-de-chamados-70db0.firebaseapp.com",
    projectId: "sistema-de-chamados-70db0",
    storageBucket: "sistema-de-chamados-70db0.appspot.com",
    messagingSenderId: "739595416493",
    appId: "1:739595416493:web:1d93415cb139711af76724",
    measurementId: "G-8LQJT2QF1S"
  };
  
  // Initialize Firebase
 
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 
  export default firebase;