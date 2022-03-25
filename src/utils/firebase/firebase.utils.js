import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVBc1jqrBKjSwlYNDKN6WOf8u9izBqob8",
  authDomain: "crwn-clothing-31385.firebaseapp.com",
  projectId: "crwn-clothing-31385",
  storageBucket: "crwn-clothing-31385.appspot.com",
  messagingSenderId: "368598691863",
  appId: "1:368598691863:web:3a649a3e1591bfea03ec52"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {name: displayName, email, createdAt})
    } catch (e) {
      console.error('Error creating the user', e.message)
    }

    return userDocRef;
  }
}