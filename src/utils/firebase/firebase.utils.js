import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs

} from 'firebase/firestore'
import { useCallback } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAvoDh1fKPqiWloYEXI4Y2u3t49oTWql-Y",
  authDomain: "crwn-clothing-db-21d92.firebaseapp.com",
  projectId: "crwn-clothing-db-21d92",
  storageBucket: "crwn-clothing-db-21d92.appspot.com",
  messagingSenderId: "629623714843",
  appId: "1:629623714843:web:4640465f4124d3888634be"
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionkey, objectsToAdd, field) => {
  const collectionRef = collection(db, collectionkey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())


}

export const createUserDocumentFromAuth = async (userAuth, displayName) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const {email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        pqr:'something 1',
        xyz: 'something 2',
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    };
  }
  return userSnapshot;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (Callback) => onAuthStateChanged(auth, Callback);
 export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
          auth,
          (userAuth) => {
              unsubscribe();
              resolve(userAuth);
          },
          reject
      )
  })
}