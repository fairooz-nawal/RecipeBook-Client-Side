import { useParams } from 'react-router';
import React, { useContext, useEffect, useState } from 'react';
import { ContextAPI } from '../components/ContextApi';
import Swal from 'sweetalert2'
import { use } from 'react';

const userdetailPromise = fetch('http://localhost:3000/recipe').then(res => res.json())
const DetailRecipe = () => {
    const recipes = use(userdetailPromise);
    const { user } = useContext(ContextAPI);
    const { id } = useParams();
    const singleRecipe = recipes.find(recipe => recipe._id == id);
    console.log(singleRecipe)
    const { rating } = singleRecipe;
    const [totalLike, setLike] = useState(rating);

    useEffect(() => {
        setLike(rating);
        console.log("Rating updated:", rating);
    }, [rating]);

    const handleLike = (id) => {
        if (singleRecipe?.email === user?.email) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You cannot like your own recipe!",
            });
        }
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
                        title: `You liked this recipe!`,
                        icon: "success",
                        draggable: true, 
                        willClose: () => {
                            window.location.reload();
                        }
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
        <div className="py-[150px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-200 josefin text-center">{totalLike} people are interested in this recipe</h1><br />
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row border-2 border-amber-300 rounded-2xl">
                    <img
                        src={singleRecipe?.image}
                        className="w-[450px] h-[500px] rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold text-amber-200 tang">{singleRecipe?.title}</h1><br />
                        <p className="josefin text-gray-300 text-xl font-bold">Ingredients: {singleRecipe?.ingredients}</p><br />
                        <p className="josefin text-gray-300">{singleRecipe?.instructions}</p><br />
                        <p className="oswald text-gray-300 font-bold">Cuisine: <span className='tang text-amber-200 text-2xl'>{singleRecipe?.cuisine}</span></p>
                        <p className="oswald text-gray-300 font-bold">Preparation: {singleRecipe?.preparation}</p>
                        <p className="oswald text-gray-300 font-bold">Category: <span className='tang text-amber-200 text-2xl'>{singleRecipe?.category}</span></p><br />
                        <p className="oswald text-gray-300 font-bold">Rating: <span className='text-amber-200 text-2xl'>{totalLike}</span></p><br />
                        <button onClick={() => handleLike(singleRecipe._id)} className="btn btn-primary">Like this Recipe</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DetailRecipe;
