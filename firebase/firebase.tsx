import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAo9UeMNz9SY8bOc_BuhyUD52KF7h82n4",
  authDomain: "coder-9c9e0.firebaseapp.com",
  projectId: "coder-9c9e0",
  storageBucket: "coder-9c9e0.appspot.com",
  messagingSenderId: "26824334461",
  appId: "1:26824334461:web:28a32f4390a546fcfa2514",
  measurementId: "G-DMN03FGPWF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GithubAuthProvider();
const db = getFirestore();

provider.setCustomParameters({
  allow_signup: "false",
});

function colUsers(col: any) {
  const colRef = collection(db, col);
  let users: any;
  getDocs(colRef)
    .then((e) => {
      e.docs.map((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((err) => console.log(err));
  return users;
}

function loginGit() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result.user;
    })
    .catch((err) => console.log(err.message));
}

function logOutUser() {
  signOut(auth)
    .then(() => {
      console.log("user logout");
    })
    .catch((err) => console.log(err.message));
}

function logInEmailAndPass(email: string, password: string) {
  console.log("dziala");
  return signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      return user.user;
    })
    .catch((err) => err.message);
}

export { colUsers, loginGit, logOutUser, logInEmailAndPass };
