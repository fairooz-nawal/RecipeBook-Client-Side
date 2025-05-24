import React, { useContext} from 'react';
import { ContextAPI } from './ContextApi';
const MyRecipeSingleComponent = ({ allrecipe }) => {
    const { handleDelete } = useContext(ContextAPI);
    const { _id, image, title, ingredients, instructions, cuisine, preparation, category, rating } = allrecipe;
    
    return (
        <div className="hero bg-base-200 min-h-screen">
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
                    <p className="oswald text-gray-300 font-bold">Rating: <span className='text-amber-200 text-2xl'>{rating}</span></p><br />
                    <div className="space-x-3">
                        <button className="btn btn-primary ">Update</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyRecipeSingleComponent;