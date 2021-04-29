import firebase from 'firebase';
//connects db with app
firebase.initializeApp ({
    apiKey: "AIzaSyA-vjud7dmW493bcQuquKd8aBkA0UW7jaA",
    authDomain: "sushi-45add.firebaseapp.com",
    projectId: "sushi-45add",
    storageBucket: "sushi-45add.appspot.com",
    messagingSenderId: "32258194919",
    appId: "1:32258194919:web:7eaa115b3efcc17ab7d142",
    measurementId: "G-FK5FVVRB1C"
  });

  const db = firebase.firestore();

export {db};