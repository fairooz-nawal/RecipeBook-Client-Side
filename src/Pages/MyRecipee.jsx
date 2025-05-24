import React from 'react';
import { useLoaderData } from 'react-router';
import SingleRecipe from '../components/SingleRecipe';
import MyRecipeSingleComponent from '../components/MyRecipeSingleComponent';

const MyRecipee = () => {
    const recipes = useLoaderData();
    return (
        <div className='grid grid-cols-1 gap-4 max-w-full md:max-w-5xl lg:max-w-7xl mx-auto'>
            {
                recipes.map(recipe => <MyRecipeSingleComponent key={recipe._id} recipe={recipe}></MyRecipeSingleComponent>)
            }
        </div>
    );
};

export default MyRecipee;