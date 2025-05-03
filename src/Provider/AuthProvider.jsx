import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // register
    const register = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login 
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password )
    };

    // signIn whit google
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // logOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    };
    // update user
    const updateUserProfile = (userData) =>{
        return updateProfile(auth.currentUser, userData)
    }

    // maneg user
    useEffect(() =>{
         const createUser = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            createUser();
        }
    }, [])

    const userInfo = {
        login,
        setUser,
        register,
        user,
        signInWithGoogle,
        logOut,
        loading,
        updateUserProfile,
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;