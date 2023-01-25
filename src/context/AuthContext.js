import {
    createContext, 
    useContext, 
    useEffect, 
    useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {auth, db} from "../Firebase.config";
import {doc, setDoc, collection, getDocs} from "@firebase/firestore";

const UserContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [organizations, setOrganizations] = useState([])
    const organizationsRef = collection(db, "organizations")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [user])

    useEffect(() => {
        const getOrganizations = async () => {
            const data = await getDocs(organizationsRef)
            const filteredData = data.docs.map(doc => ({...doc.data(), id: doc.id}))
            setOrganizations(filteredData)
        }

        getOrganizations();
    }, [])

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(async result => {
                const ref = doc(db, "users", result.user.uid)
                const docRef = await setDoc(ref, {email: email, support: []})
            })

    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    return (
        <UserContext.Provider value={{createAccount, user, logout, signIn, organizations, organizationsRef, setOrganizations}}>
            { children }
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}