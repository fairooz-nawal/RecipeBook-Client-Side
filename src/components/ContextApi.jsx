import React, { createContext, useEffect, useState } from 'react';

export const ContextAPI = createContext('');

const AuthProvider = ({children}) => {

    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/recipe')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    
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