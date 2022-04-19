
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDM0TS0S7OceYz-zT9xHITgQyZLkrFtXW8",
  authDomain: "pepecommerce-89f64.firebaseapp.com",
  projectId: "pepecommerce-89f64",
  storageBucket: "pepecommerce-89f64.appspot.com",
  messagingSenderId: "1058065275449",
  appId: "1:1058065275449:web:4bc4765e23328d744f8be8"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp () {
    return app;
}
