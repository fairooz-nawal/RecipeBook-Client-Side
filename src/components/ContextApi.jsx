import React, { createContext, useEffect, useState } from 'react';

export const ContextAPI = createContext('');

const AuthProvider = ({children}) => {
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
    
    const authContext = {
    recipes
    }

    return (
        <ContextAPI.Provider value={authContext}>
            {children}
        </ContextAPI.Provider>
    );
};

export default AuthProvider;