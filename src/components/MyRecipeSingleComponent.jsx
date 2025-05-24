import React, { useContext } from 'react';
import { ContextAPI } from './ContextApi';
import Swal from 'sweetalert2'
const MyRecipeSingleComponent = ({ allrecipe }) => {
    const { handleDelete } = useContext(ContextAPI);
    const { _id, image, title, ingredients, instructions, cuisine, preparation, category, rating, email } = allrecipe;
    const id = _id;
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
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
                   event.target.reset();
                   window.location.reload();
                   document.getElementById('my_modal_6').checked = false;
    }})
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row border-2 border-amber-300 rounded-2xl">
                <img
                    src={image}
                    className="w-[450px] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold text-amber-200 tang">{title}</h1><br />
                    <p className="josefin text-gray-300 text-xl font-bold">Ingredients: {ingredients}</p><br />
                    <p className="josefin text-gray-300">{instructions}</p><br />
                    <p className="oswald text-gray-300 font-bold">Cuisine: <span className='tang text-amber-200 text-2xl'>{cuisine}</span></p>
                    <p className="oswald text-gray-300 font-bold">Preparation: {preparation}</p>
                    <p className="oswald text-gray-300 font-bold">Category: <span className='tang text-amber-200 text-2xl'>{category}</span></p><br />
                    <p className="oswald text-gray-300 font-bold">Rating: <span className='text-amber-200 text-2xl'>{rating}</span></p><br />
                    <div className="space-x-3">
                        <label htmlFor="my_modal_6" className="btn btn-primary">Update</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box bg-[#0b1315]">
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
                                                    <input type="text" className="input input-bordered w-full" name="image" placeholder="Enter your image URL" defaultValue={image} />

                                                    <label className="label">Title</label>
                                                    <input type="text" className="input input-bordered w-full" name="title" placeholder="Recipe Title" defaultValue={title} />

                                                    <label className="label">Ingredients</label>
                                                    <textarea className="textarea textarea-bordered w-full" name="ingredients" placeholder="List ingredients, separated by commas" defaultValue={ingredients}></textarea>

                                                    <label className="label">Instructions</label>
                                                    <textarea className="textarea textarea-bordered w-full" name="instructions" placeholder="Step-by-step instructions" defaultValue={instructions}></textarea>

                                                    <label className="label">Cuisine Type</label>
                                                    <select className="select select-bordered w-full" name="cuisine" defaultValue={cuisine}>
                                                        <option value="Italian">Italian</option>
                                                        <option value="Mexican">Mexican</option>
                                                        <option value="Indian">Indian</option>
                                                        <option value="Chinese">Chinese</option>
                                                        <option value="Other">Others</option>
                                                    </select>

                                                    <label className="label">Preparation Time (minutes)</label>
                                                    <input type="number" className="input input-bordered w-full" name="preparation" placeholder="e.g. 30" defaultValue={preparation} />

                                                    <label className="label">Categories</label>
                                                    <select className="select select-bordered w-full" name="category" defaultValue={category}>
                                                        <option value="Breakafast">Breakfast</option>
                                                        <option value="Lunch">Lunch</option>
                                                        <option value="Dinner">Dinner</option>
                                                        <option value="Dessert">Dessert</option>
                                                        <option value="Vegan">Vegan</option>
                                                    </select>

                                                    <input type="number" name="rating" className="input input-bordered w-full hidden" defaultValue={rating} />
                                                    <div className="modal-action">
                                                        <button className="btn btn-primary mt-4 w-full">Update Recipe</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyRecipeSingleComponent;