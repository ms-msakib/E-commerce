import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvoDh1fKPqiWloYEXI4Y2u3t49oTWql-Y",
    authDomain: "crwn-clothing-db-21d92.firebaseapp.com",
    projectId: "crwn-clothing-db-21d92",
    storageBucket: "crwn-clothing-db-21d92.appspot.com",
    messagingSenderId: "629623714843",
    appId: "1:629623714843:web:4640465f4124d3888634be"
  };
  
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider =  new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log (userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc ( userDocRef,{
                displayName,
                email,
                createdAt
            });
        } catch (error){
            console.log('error creating the user', error.message);
        };
    }
    return userDocRef;
  }