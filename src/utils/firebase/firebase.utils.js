import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvCHg9UK56q8oJ9M4CtBM9hnHI48hfAfU",
  authDomain: "vg-kart-v2.firebaseapp.com",
  projectId: "vg-kart-v2",
  storageBucket: "vg-kart-v2.appspot.com",
  messagingSenderId: "467308675375",
  appId: "1:467308675375:web:76e6cc666d68a28306a1da",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// firebaseApp.firestore.enablePersistence();

const provider = new GoogleAuthProvider();

//Prompts user to select an account every time - button click
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocRef;
};
