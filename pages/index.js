import {initializeApp, getAnalytics} from 'firebase/app'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const firebaseConfig = {
  apiKey: "AIzaSyAAo9UeMNz9SY8bOc_BuhyUD52KF7h82n4",
  authDomain: "coder-9c9e0.firebaseapp.com",
  projectId: "coder-9c9e0",
  storageBucket: "coder-9c9e0.appspot.com",
  messagingSenderId: "26824334461",
  appId: "1:26824334461:web:28a32f4390a546fcfa2514",
  measurementId: "G-DMN03FGPWF"
};

const app = initializeApp(firebaseConfig);

export default function Home() {
  return (
    <div className={styles.container}>
<h1>hello!</h1>
    </div>
  )
}
