import SingleRecipe from '../components/SingleRecipe';
import { useLoaderData } from 'react-router';
import { Slide } from 'react-awesome-reveal';
import { use, useState } from 'react';

const categoryromise = fetch('/category.json').then(res => res.json())
const AllRecipe = () => {
    const category = use(categoryromise);
    const recipes = useLoaderData();
    const [all, setAll] = useState(true);
    const [filteredRecipe, setFilteredRecipe] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const handleCategory = (categorytype) => {
        const filtered = recipes.filter(recipe => recipe.cuisine == categorytype);
        console.log(filtered);
        setFilteredRecipe(filtered);
        setFilteredCategory(categorytype);
        setAll(false);
    }
    return (
        <div className="mt-[100px] md:mt-[100px] lg:mt-[100px] py-[50px] md:py-[100px] lg:py-[100px]">
            <details className="dropdown flex justify-start md:justify-center lg:justify-center">
                <summary className="btn m-1 bg-primary text-white">Select Bill Type</summary>
                <ul className="text-gray-300 bg-base-200 menu dropdown-content rounded-box z-1 w-32 p-2 shadow-sm">
                    <li onClick={() => setAll(true)} className='hover:bg-primary hover:text-white p-2 text-start' >All Bills</li>
                    {category.map(singlecategory => <li onClick={() => handleCategory(singlecategory.category)} key={singlecategory.id} className='hover:bg-primary hover:text-white p-2 text-start' > {singlecategory.category}</li>
                    )}
                </ul>
            </details>

            {
                all ? <>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-200 josefin text-center py-[100px]">All Recipe</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  max-w-full md:max-w-5xl lg:max-w-7xl mx-auto'><Slide direction="down" duration={1000}>
                        {
                            recipes.map(recipe => <SingleRecipe key={recipe._id} recipe={recipe}></SingleRecipe>)
                        }
                    </Slide>
                    </div>
                </> : <>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-200 josefin text-center py-[100px]">{filteredCategory}</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  max-w-full md:max-w-5xl lg:max-w-7xl mx-auto'><Slide direction="down" duration={1000}>
                        {
                            filteredRecipe.map(recipe => <SingleRecipe key={recipe._id} recipe={recipe}></SingleRecipe>)
                        }
                    </Slide>
                    </div>
                </>
            }

        </div>

    );
};

export default AllRecipe;