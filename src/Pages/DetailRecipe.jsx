import { useParams } from 'react-router';
import React, { useContext, useEffect, useState } from 'react';
import { ContextAPI } from '../components/ContextApi';
import Swal from 'sweetalert2'

const DetailRecipe = () => {
    const { recipes} = useContext(ContextAPI);
    const { id } = useParams();
    const singleRecipe = recipes.find(recipe => recipe._id == id);
    
    const { image, title, ingredients, instructions, cuisine, preparation, category, rating } = singleRecipe;

    const [totalLike, setLike] = useState(rating);
    useEffect(()=>{
        setLike(rating);
        console.log("Rating updated:", rating);   
    },[rating]);

    const handleLike = (id) => {
        const newRatingNo = totalLike + 1;
        const newrating = { rating: newRatingNo };
        console.log(newRatingNo, newrating);

        fetch(`http://localhost:3000/recipe/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newrating)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Like Added Successfully",
                        icon: "success",
                        draggable: true
                    });
                    setLike(newRatingNo);
                }
            })
            .catch(err => {
                console.error("Error while liking recipe:", err);
                Swal.fire({
                    title: "Error",
                    text: "Could not like the recipe. Please try again.",
                    icon: "error"
                });
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen py-[150px]">
            <div className="hero-content flex-col lg:flex-row border-2 border-amber-300 rounded-2xl">
                <img
                    src={image}
                    className="w-[450px] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold text-amber-200 tang">{title}</h1><br />
                    <p className="josefin text-gray-300 text-xl font-bold">Ingredients: {ingredients}</p><br />
                    <p className="josefin text-gray-300">{instructions}</p><br />
                    <p className="oswald text-gray-300 font-bold">Cuisine: <span className='tang text-amber-200 text-2xl'>{cuisine}</span></p>
                    <p className="oswald text-gray-300 font-bold">Preparation: {preparation}</p>
                    <p className="oswald text-gray-300 font-bold">Category: <span className='tang text-amber-200 text-2xl'>{category}</span></p><br />
                    <p className="oswald text-gray-300 font-bold">Rating: <span className='text-amber-200 text-2xl'>{totalLike}</span></p><br />
                    <button onClick={() => handleLike(singleRecipe._id)} className="btn btn-primary">Like this Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default DetailRecipe;
