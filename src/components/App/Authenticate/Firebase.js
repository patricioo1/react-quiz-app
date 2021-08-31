import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBU0xPV53m4bxngelzLLtozi_Pe7lBGV14",
    authDomain: "react-quiz-app-53c26.firebaseapp.com",
    projectId: "react-quiz-app-53c26",
    storageBucket: "react-quiz-app-53c26.appspot.com",
    messagingSenderId: "579499254019",
    appId: "1:579499254019:web:e5703ad889b2bf47e00936"
  };


  const firebaseInit = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth, firebaseInit};
  export default db;