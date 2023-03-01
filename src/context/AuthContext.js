import React, { useState, useContext, createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../firebase/index"

export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return <authContext.Provider value={{ signup }} >
        {children}
    </authContext.Provider>
}