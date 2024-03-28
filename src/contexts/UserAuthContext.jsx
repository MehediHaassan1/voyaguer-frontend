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
import usePublicApi from "../hooks/usePublicApi";

export const UserContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserAuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const publicApi = usePublicApi();

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
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const userEmail = { email: currentUser.email };
                const verifyUserRes = await publicApi.post(
                    "/api/v1/jwt",
                    userEmail
                );
                const token = verifyUserRes.data.token;
                if (token) {
                    localStorage.setItem("access-token", token);
                    setLoading(false);
                }
            } else {
                setUser(null);
                localStorage.removeItem("access-token");
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
