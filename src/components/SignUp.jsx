import React from 'react';

const SignUp = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add a Recipe</h1>
                    <p className="py-6">
                        Share your favorite recipes with the world! Fill in the form to add a new dish to your cookbook.
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-md shadow-2xl">
                    <div className="card-body space-y-2">
                        <fieldset className="space-y-2">

                            <label className="label">Image</label>
                            <input type="file" className="file-input file-input-bordered w-full" />

                            <label className="label">Title</label>
                            <input type="text" className="input input-bordered w-full" placeholder="Recipe Title" />

                            <label className="label">Ingredients</label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="List ingredients, separated by commas"></textarea>

                            <label className="label">Instructions</label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Step-by-step instructions"></textarea>

                            <label className="label">Cuisine Type</label>
                            <select className="select select-bordered w-full">
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                                <option>Others</option>
                            </select>

                            <label className="label">Preparation Time (minutes)</label>
                            <input type="number" className="input input-bordered w-full" placeholder="e.g. 30" />

                            <label className="label">Categories</label>
                            <div className="flex flex-wrap gap-2">
                                {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(category => (
                                    <label key={category} className="cursor-pointer label gap-2">
                                        <input type="checkbox" className="checkbox checkbox-sm" />
                                        <span>{category}</span>
                                    </label>
                                ))}
                            </div>

                            <input type="number" value="0" readOnly className="input input-bordered w-full hidden" />

                            <button className="btn btn-primary mt-4 w-full">Add Recipe</button>

                        </fieldset>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;