import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASHOPONxK99hu0Nxyji3Aw_mC7eodgGaI",
    authDomain: "crwn-db-613c2.firebaseapp.com",
    databaseURL: "https://crwn-db-613c2.firebaseio.com",
    projectId: "crwn-db-613c2",
    storageBucket: "crwn-db-613c2.appspot.com",
    messagingSenderId: "681012640642",
    appId: "1:681012640642:web:25fffb76b47f552a9f6d9b"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        // create user data
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch(error) {
            console.log('error creating a user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;