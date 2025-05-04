import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
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
    // user verification
    const verification = () =>{
        return sendEmailVerification(auth.currentUser)
    };

    // password porgoer
    const forgotPassword =(email)=>{
        return sendPasswordResetEmail(auth, email)
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
        forgotPassword,
        setUser,
        register,
        user,
        signInWithGoogle,
        logOut,
        loading,
        verification,
        updateUserProfile,
    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;