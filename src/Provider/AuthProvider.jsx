import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // register
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login 
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password )
    };

    // logOut
    const logOut = () =>{
        return signOut(auth)
    }

    // maneg user
    useEffect(() =>{
         const createUser = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () =>{
            createUser();
        }
    }, [])

    const userInfo = {
        login,
        register,
        user,
        logOut,
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;