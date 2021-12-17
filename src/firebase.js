
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = firebase.initializeApp({
  
  // apiKey: "AIzaSyCI5hnChx3bNfZY9CfJCAlWIA0cAAPn2OI",
  // authDomain: "todoist-app-122fc.firebaseapp.com",
  // databaseURL: "https://todoist-app-122fc-default-rtdb.firebaseio.com",
  // projectId: "todoist-app-122fc",
  // storageBucket: "todoist-app-122fc.appspot.com",
  // messagingSenderId: "708014072264",
  // appId: "1:708014072264:web:bedb30c6cc39a423d620fd"


  apiKey: "AIzaSyBaUCzanqFdcHVhTIjCcYEy9xWfjul3DqI",
  authDomain: "todoist-clone-a8b2d.firebaseapp.com",
  databaseURL: "https://todoist-clone-a8b2d-default-rtdb.firebaseio.com",
  projectId: "todoist-clone-a8b2d",
  storageBucket: "todoist-clone-a8b2d.appspot.com",
  messagingSenderId: "984629856873",
  appId: "1:984629856873:web:fb79ad963538faeb42b0f8"
});

export {firebaseConfig as firebase}

