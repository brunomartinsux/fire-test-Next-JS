import { useState, useEffect } from 'react'
import firebase from './Firebase'


const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
auth.languageCode = 'pt-br'

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
})

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const authStateChanged = async (authState) => {
        if (!authState) {
            setLoading(false)
            return
        }

        setLoading(true)

        var formattedUser = formatAuthUser(authState)

        setAuthUser(formattedUser)

        setLoading(false)

    }

    const clear = () => {
        setAuthUser(null)
        setLoading(true)
    }

    const signWithGoogle = async () => {
        return await auth.signInWithPopup(provider)
    }

    const signInWithEmailAndPassword = (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password)

    const createUserWithEmailAndPassword = (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password)

    const signOut = () =>
        firebase.auth().signOut().then(clear)

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged)
        return () => unsubscribe()
    }, [])

    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        signWithGoogle,
        createUserWithEmailAndPassword,
        signOut
    }
}