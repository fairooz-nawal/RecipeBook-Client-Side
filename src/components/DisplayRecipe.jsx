import React, { useContext } from 'react';
import { ContextAPI } from './ContextApi';
import SingleRecipe from './SingleRecipe';
import { Link } from 'react-router';
const DisplayRecipe = () => {
    const { recipes } = useContext(ContextAPI);
    return (
        <div className="py-[100px] max-w-full md:max-w-5xl lg:max-w-7xl mx-auto border-x-2 border-amber-300 px-5">
            <h1 className="oswald text-white text-2xl md:text-5xl lg:text-5xl">Our Most Popular <span className="text-amber-300"> Recipes</span> </h1><br />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    recipes.map(recipe => <SingleRecipe key={recipe._id} recipe={recipe}></SingleRecipe>)
                }
            </div>
            <div className="w-full flex justify-center mt-10">
                 <Link to={'/allRecipe'} className="btn btn-primary text-xl flex items-center hover:bg-white hover:font-bold hover:text-lime-600">See All Recipe</Link>
            </div>

        </div>

    );
};

export default DisplayRecipe;