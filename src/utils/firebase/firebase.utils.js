import {initializeApp} from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import {doc, getDoc, getFirestore, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalDetails = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {displayName, email, createdAt, ...additionalDetails});
    } catch (e) {
      console.error('Error creating the user', e.message);
    }
  }
    return userSnapshot;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const onAuthStateChangedListener = callback => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    )
  });
}

export const signOutUser = async () => await signOut(auth);

export const addCollectionAndDocuments = async (collectionKey, objects, field) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objects.forEach(obj => {
    const docRef = doc(collectionRef, obj[field].toLowerCase());
    batch.set(docRef, obj);
  });
  await batch.commit();
}

export const getCategoriesAndDocuments = async path => {
  const collectionRef = collection(db, path);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data()
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
}