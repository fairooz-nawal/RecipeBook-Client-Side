import React from 'react';

const SingleRecipe = ({ recipe }) => {
    const { image, title, cuisine } = recipe;
    return (
        <div className="card bg-[#0b1315]  border-2 border-amber-300 shadow-sm">
            <figure>
                <img className="w-[300px] h-[300px] rounded-2xl"src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{cuisine}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;