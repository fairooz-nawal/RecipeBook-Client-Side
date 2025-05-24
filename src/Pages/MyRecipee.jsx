import React from 'react';
import { useLoaderData } from 'react-router';
import SingleRecipe from '../components/SingleRecipe';
import MyRecipeSingleComponent from '../components/MyRecipeSingleComponent';

const MyRecipee = () => {
    const allrecipes = useLoaderData();
    return (
        <div className='grid grid-cols-1 gap-4 max-w-full md:max-w-5xl lg:max-w-7xl mx-auto mt-[100px]'>
            {
                allrecipes.map(allrecipe => <MyRecipeSingleComponent key={allrecipe._id} allrecipe={allrecipe}></MyRecipeSingleComponent>)
            }
        </div>
    );
};

export default MyRecipee;