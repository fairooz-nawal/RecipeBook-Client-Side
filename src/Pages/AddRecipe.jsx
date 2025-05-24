import { useContext } from 'react';
import Swal from 'sweetalert2'
import { ContextAPI } from '../components/ContextApi';

const AddRecipe = () => {
    const { user } = useContext(ContextAPI);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const email = user?.email;
        const rating = parseInt(data.rating, 0);
        const category = Array.from(event.target.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
        fetch("http://localhost:3000/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data, 
                category: category,
                rating: rating,
                email: email,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Recipe Added Successfully",
                        icon: "success",
                        draggable: true
                    });
                    event.target.reset();
                }
            })
    }
    return (
        <div className="mt-[120px] hero bg-[#0b1315] min-h-screen py-[50px]">
            <div className="hero-content flex-col border-2 border-amber-300 rounded-2xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add a Recipe</h1>
                    <p className="py-6">
                        Share your favorite recipes with the world! Fill in the form to add a new dish to your cookbook.
                    </p>
                </div>

                <div className="card bg-[#0b1315] border-2 border-amber-300 w-full max-w-md shadow-2xl">
                    <div className="card-body space-y-2">
                        <form onSubmit={handleSubmit} className="space-y-2">

                            <label className="label">Image</label>
                            <input type="text" className="input input-bordered w-full" name="image" placeholder="Enter your image URL" />

                            <label className="label">Title</label>
                            <input type="text" className="input input-bordered w-full" name="title" placeholder="Recipe Title" />

                            <label className="label">Ingredients</label>
                            <textarea className="textarea textarea-bordered w-full" name="ingredients" placeholder="List ingredients, separated by commas"></textarea>

                            <label className="label">Instructions</label>
                            <textarea className="textarea textarea-bordered w-full" name="instructions" placeholder="Step-by-step instructions"></textarea>

                            <label className="label">Cuisine Type</label>
                            <select className="select select-bordered w-full" name="cuisine">
                                <option value="Italian">Italian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Indian">Indian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Other">Others</option>
                            </select>

                            <label className="label">Preparation Time (minutes)</label>
                            <input type="number" className="input input-bordered w-full" name="preparation" placeholder="e.g. 30" />

                            <label className="label">Categories</label>
                            <div className="flex flex-wrap gap-2">
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Breakfast</span>
                                        <input type="checkbox" name="category" value="Breakfast" className="checkbox" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Lunch</span>
                                        <input type="checkbox" name="category" value="Lunch" className="checkbox" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Dinner</span>
                                        <input type="checkbox" name="category" value="Dinner" className="checkbox" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Dessert</span>
                                        <input type="checkbox" name="category" value="Dessert" className="checkbox" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text">Vegan</span>
                                        <input type="checkbox" name="category" value="Vegan" className="checkbox" />
                                    </label>
                                </div>
                            </div>

                            <input type="number" value="0" name="rating" className="input input-bordered w-full hidden" />

                            <button className="btn btn-primary mt-4 w-full">Add Recipe</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddRecipe;