
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDpDrvYrVqPxc8D119YC-oBr1ZrM_PaBKI",
  authDomain: "netflix-clone-5fc1e.firebaseapp.com",
  projectId: "netflix-clone-5fc1e",
  storageBucket: "netflix-clone-5fc1e.firebasestorage.app",
  messagingSenderId: "751583296858",
  appId: "1:751583296858:web:6c0b687144d22eb2d9c763"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up erstellen
const signup = async(name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" ")); 
    }
}

// Login erstellen
const login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split("/")[1].split("-").join(" ")); 
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};