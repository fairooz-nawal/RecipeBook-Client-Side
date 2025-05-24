import React, { useContext } from 'react';
import { ContextAPI } from './ContextApi';
import SingleRecipe from './SingleRecipe';

const DisplayRecipe = () => {
    const { recipes } = useContext(ContextAPI);
    return (
        <div className="py-[100px] max-w-full md:max-w-5xl lg:max-w-7xl mx-auto border-x-2 border-amber-300 px-5">
            <h1 className="oswald text-white text-2xl md:text-5xl lg:text-5xl">Our Most Popular <span className="text-amber-300"> Recipes</span> </h1><br />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                {
                    recipes.map(recipe => <SingleRecipe key={recipe._id} recipe={recipe}></SingleRecipe>)
                }
            </div>
        </div>

    );
};

export default DisplayRecipe;