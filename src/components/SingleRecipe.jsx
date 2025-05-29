
import { useContext } from 'react';
import { Link } from 'react-router';
import { ContextAPI } from './ContextApi';


const SingleRecipe = ({ recipe }) => {
    const {light } =useContext(ContextAPI);
    const { _id,image, title, cuisine,rating } = recipe;
    return (
        <div className={` ${light==true ? 'bg-white' : 'bg-[#0b1315]'} rounded-2xl border-2 border-amber-300 shadow-sm`}>
            <figure>
                <img className="w-[300px] h-[250px] rounded-2xl mx-auto"src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Cusine: {cuisine}</p>
                <p>Total Like: {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/recipeDetails/${_id}`} className="btn btn-primary flex items-center hover:bg-white hover:font-bold hover:text-lime-600">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;