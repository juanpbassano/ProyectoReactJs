import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzrLtF1AxqVYoDX4CW1y-OT0rQX0QlTF0",
    authDomain: "basereact-ebe0f.firebaseapp.com",
    projectId: "basereact-ebe0f",
    storageBucket: "basereact-ebe0f.appspot.com",
    messagingSenderId: "711763166605",
    appId: "1:711763166605:web:418700d435d96a597ae9c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getStockFromFirebase = async (productId) => {
    const docRef = doc(db, 'BaseReact', productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().stock;
    } else {
        return 0;
    }
};