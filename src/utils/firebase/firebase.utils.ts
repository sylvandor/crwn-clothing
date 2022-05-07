import {initializeApp} from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User
} from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QueryDocumentSnapshot,
  setDoc,
  writeBatch
} from 'firebase/firestore'

import {Category, CategoryItem, CategoryItemMap, CategoryMap} from "../../store/categories/categories.types";
import {UserData} from "../../store/user/user.types";

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

export type AdditionalInformation = {
  displayName?: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalDetails = {} as AdditionalInformation
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {displayName, email, createdAt, ...additionalDetails});
    } catch (error) {
      console.error('Error creating the user', error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> =>
  new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    )
  });


export const signOutUser = async () => await signOut(auth);

export type ObjectToAdd = {
  title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(collectionKey: string, objectsToAdd: T[]) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(obj => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });
  await batch.commit();
}

export const getCategoriesAndDocuments = async (path: string): Promise<CategoryMap> => {
  const collectionRef = collection(db, path);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.reduce((accCategories, docSnapshot) => {
    const {title, imageUrl, items} = docSnapshot.data() as Category & { items: CategoryItem[] };

    accCategories[title.toLowerCase()] = {
      title,
      imageUrl,
      items: items.reduce((accItems, item) => {
        accItems[item.id] = item;
        return accItems;
      }, {} as CategoryItemMap)
    }
    return accCategories;
  }, {} as CategoryMap);
}
