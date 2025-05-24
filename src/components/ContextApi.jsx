import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
export const ContextAPI = createContext('');

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
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
}, []);
   

const signUpUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

const  signUpWithGoogle = () =>{
  return signInWithPopup(auth, provider);
}
    const authContext = {
    recipes,signUpUser, signUpWithGoogle
    }

    return (
        <ContextAPI.Provider value={authContext}>
            {children}
        </ContextAPI.Provider>
    );
};

export default AuthProvider;