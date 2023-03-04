import React, { useState, useContext, createContext, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../firebase/index"

export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUSer) => {
            setUser(currentUSer)
        });
        return () => {
            unsubcribe();
        };
    }, [])



    return <authContext.Provider value={{ signup, login, user }} >
        {children}
    </authContext.Provider>
}