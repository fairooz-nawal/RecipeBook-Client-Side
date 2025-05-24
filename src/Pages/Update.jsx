import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { ContextAPI } from '../components/ContextApi';
const Update = ({id}) => {
    const {recipes} = useContext(ContextAPI);
    const recipe = recipes.find(recipe => recipe._id == id);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const email = recipe?.email;
        console.log(email)
        fetch(`http://localhost:3000/recipe/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data,
                email: email,
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Recipe Updated Successfully",
                        icon: "success",
                        draggable: true
                    });
                    event.target.reset();
                }
                window.location.reload();
            })
    }
    return (
        <div className="mt-[100px] hero bg-[#0b1315] min-h-screen py-[50px]">
            <div className="hero-content flex-col border-2 border-amber-300 rounded-2xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Your Recipe</h1>
                    <p className="py-6">
                        Share your favorite recipes with the world! Fill in the form to add a new dish to your cookbook.
                    </p>
                </div>

                <div className="card bg-[#0b1315] border-2 border-amber-300 w-full max-w-md shadow-2xl">
                    <div className="card-body space-y-2">
                        <form onSubmit={handleSubmit} className="space-y-2">

                            <label className="label">Image</label>
                            <input type="text" className="input input-bordered w-full" name="image" placeholder="Enter your image URL"  defaultValue = {recipe.image}/>

                            <label className="label">Title</label>
                            <input type="text" className="input input-bordered w-full" name="title" placeholder="Recipe Title"  defaultValue = {recipe.title}/>

                            <label className="label">Ingredients</label>
                            <textarea className="textarea textarea-bordered w-full" name="ingredients" placeholder="List ingredients, separated by commas" defaultValue = {recipe.ingredients}></textarea>

                            <label className="label">Instructions</label>
                            <textarea className="textarea textarea-bordered w-full" name="instructions" placeholder="Step-by-step instructions" defaultValue = {recipe.instructions}></textarea>

                            <label className="label">Cuisine Type</label>
                            <select className="select select-bordered w-full" name="cuisine" defaultValue = {recipe.cuisine}>
                                <option value="Italian">Italian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Indian">Indian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Other">Others</option>
                            </select>

                            <label className="label">Preparation Time (minutes)</label>
                            <input type="number" className="input input-bordered w-full" name="preparation" placeholder="e.g. 30" defaultValue = {recipe.preparation} />

                            <label className="label">Categories</label>
                            <select className="select select-bordered w-full" name="category" defaultValue = {recipe.category}>
                                <option value="Breakafast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Vegan">Vegan</option>
                            </select>

                            <input type="number" name="rating" className="input input-bordered w-full hidden" defaultValue = {recipe.rating} />

                            <button className="btn btn-primary mt-4 w-full">Update Recipe</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;