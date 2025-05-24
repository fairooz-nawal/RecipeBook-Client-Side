import SingleRecipe from '../components/SingleRecipe';
import { useLoaderData } from 'react-router';

const AllRecipe = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[100px] py-[100px] max-w-full md:max-w-5xl lg:max-w-7xl mx-auto'>
            {
                recipes.map(recipe => <SingleRecipe key={recipe._id} recipe={recipe}></SingleRecipe>)
            }
        </div>
    );
};

export default AllRecipe;