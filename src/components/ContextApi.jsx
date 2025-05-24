import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged, signInWithPopup,signInWithEmailAndPassword  } from "firebase/auth";
export const ContextAPI = createContext('');

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        async function fetchRecipes() {
    try {
      const response = await fetch('http://localhost:3000/recipe')
      const data = await response.json()
      setRecipes(data)
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }
  fetchRecipes()
}, [recipes]);
   

const signUpUser = (email, password) => {
   setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
}

const  signUpWithGoogle = () =>{
   setLoading(true);
  return signInWithPopup(auth, provider);
}

const signInUser = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
    const authContext = {
    recipes,signUpUser, signUpWithGoogle,signInUser,user
    }

    return (
        <ContextAPI.Provider value={authContext}>
            {children}
        </ContextAPI.Provider>
    );
};

export default AuthProvider;