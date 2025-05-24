import React from 'react';
import { useLoaderData } from 'react-router';
import SingleRecipe from '../components/SingleRecipe';

const AllRecipe = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[100px] py-[100px] max-w-full md:max-w-5xl lg:max-w-7xl mx-auto'>
            {
                data.map(recipe => <SingleRecipe key={data._id} recipe={recipe}></SingleRecipe>)
            }
        </div>
    );
};

export default AllRecipe;