import { useState } from "react"
import initAuth from '../Firebase/firebase.initialize'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                console.log('inside state change', user);
                setUser(user);
            }
        })
    },[])

    return {
        user, 
        error,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;