import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../FireBase/firebase.config";

export const AUthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
//Create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //LOgin user
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const useInfo ={
        user,
        loading,
        createUser,
        signInUser

    }
    return (
        <AUthContext.Provider value={useInfo}>
            {children}
        </AUthContext.Provider>
    );
};

export default AuthProvider;