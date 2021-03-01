import firebase from "firebase/app";
import "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyAXfUpOR1yXUzu6KX0eOUMX8W9blqBdebg",
  authDomain: "todo-app-cd554.firebaseapp.com",
  projectId: "todo-app-cd554",
  storageBucket: "todo-app-cd554.appspot.com",
  messagingSenderId: "360704803424",
  appId: "1:360704803424:web:263235399d4cf39e17b905"
}

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();
