import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import app from "../firebaseUtils/firebaseConfig";

export const UserContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserAuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserData = (fullName) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: fullName,
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const googleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const userAuth = {
        loading,
        user,
        createUser,
        updateUserData,
        loginUser,
        logOutUser,
        googleUser,
    };
    return (
        <UserContext.Provider value={userAuth}>{children}</UserContext.Provider>
    );
};

export default UserAuthContext;
