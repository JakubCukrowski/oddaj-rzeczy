import {createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {auth, db} from "../Firebase.config";
import {doc, setDoc} from "@firebase/firestore";

const UserContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [user])

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(async result => {
                const ref = doc(db, "users", result.user.uid)
                const docRef = await setDoc(ref, {email: email, support: ""})
            })
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    return (
        <UserContext.Provider value={{createAccount, user, logout, signIn}}>
            { children }
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}