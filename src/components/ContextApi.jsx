import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Swal from 'sweetalert2'

export const ContextAPI = createContext('');

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
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
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signUpWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signOutUser = () => {
    setLoading(false);
    return signOut(auth);
  }

  const updateUser = (userDetail) => {
    return updateProfile(auth.currentUser, userDetail)
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/recipe/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your recipe has been deleted.",
                icon: "success",
                draggable: true
              });
              const remainingRecipes = recipes.filter(r => r._id !== id);
              setRecipes(remainingRecipes);
              window.location.reload();
            }

          })
          .catch(err => {
            console.error("Error while deleting recipe:", err);
            Swal.fire({
              title: "Error",
              text: "Could not delete the recipe. Please try again.",
              icon: "error"
            });
          });
      }
    }
    )
  };

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
    recipes, signUpUser, signUpWithGoogle, signInUser, user, setUser, signOutUser, setLoading,loading, setRecipes,handleDelete,updateUser
  }

  return (
    <ContextAPI.Provider value={authContext}>
      {children}
    </ContextAPI.Provider>
  );
};

export default AuthProvider;