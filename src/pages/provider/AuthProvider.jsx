import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
const AuthContext = createContext(null)

 export const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user , setUser]  = useState()
    const [loading, setLoading] =useState(true)

    const GProvider  = new GoogleAuthProvider()

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logOut =()=>{
        setLoading(true)
        return signInUser(auth)
    }

    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    



    const userInfo ={
            user,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;