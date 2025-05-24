import { useParams } from 'react-router';
import React, { useContext, useState } from 'react';
import { ContextAPI } from '../components/ContextApi';
const DetailRecipe = () => {
    const { recipes } = useContext(ContextAPI);
    const { id } = useParams();
    const singleRecipe = recipes.find(recipe => recipe._id == id);
    const { _id, image, title, ingredients, instructions, cuisine, preparation, category,rating} = singleRecipe;
    const [totalLike, setLike] = useState(rating);
    const handleLike = () => {
        setLike(totalLike + 1);
        fetch(`http://localhost:3000/recipe/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ like: totalLike })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row border-2 border-amber-300 rounded-2xl">
                <img
                    src={image}
                    className="w-[450px] rounded-lg shadow-2xl"
                />
                <div>
                    <div className="">
                        <h1 className="text-5xl font-bold text-amber-200 tang">{title}</h1><br />
                        <p className="josefin text-gray-300 text-xl font-bold">Ingredients:{ingredients}</p><br />
                        <p className="josefin text-gray-300 ">
                            {instructions}
                        </p><br />
                        <p className="oswald text-gray-300 font-bold">Cuisine: <span className='tang text-amber-200 text-2xl'>{cuisine}</span></p>
                        <p className="oswald text-gray-300 font-bold">Preparation:{preparation}</p>
                        <p className="oswald text-gray-300 font-bold">Category: <span className='tang text-amber-200 text-2xl'>{category}</span></p><br />
                        <p className="oswald text-gray-300 font-bold">Rating: <span className=' text-amber-200 text-2xl'>{rating}</span></p><br />
                        <button onClick={handleLike} className="btn btn-primary">Like this Recipe</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailRecipe;