import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { ContextAPI } from '../components/ContextApi';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
const Registration = () => {
    const { signUpUser, updateUser, signUpWithGoogle, setUser } = useContext(ContextAPI);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        // const photo = e.target.Photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        // const userDetails = { displayName: name, photoURL: photo };
        // updateUser(userDetails);

        setError('');
        if (passwordRegex.test(password)) {
            //creating new User
            signUpUser(email, password)
                .then((result) => {
                    const user = result.user;
                    // // console.log(user);
                    // updateUser({ displayName: name, photoURL: photo })
                    //     .then(() => {
                    //         setUser({ ...user, displayName: name, photoURL: photo });
                    //     })
                    //     .catch((error) => {
                    //         //    console.log(error);
                    //         setUser(user);
                    //     });

                    //success message
                    if (user) {
                        Swal.fire({
                            title: "Registration Done Successfully",
                            icon: "success",
                            draggable: true
                        });
                    }
                    // navigate(location?.state || '/');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate('/auth/register');
                });
        }
        else {
            setError('Password must be at least 6 characters long and contain at least one uppercase letter.')
        }


    }

   
    return (
        <div className='bg-secondary'>
            <ToastContainer />
            <div className="hero bg-[#0b1315] min-h-screen ">
                <div className="card text-gray-200  space-y-4 w-full max-w-sm border-2 border-amber-300 rounded-2xl shrink-0 shadow-2xl my-[200px] md:my-[100px] lg:my-[150px] p-5 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitForm}>
                            <label className="label text-lg ">Name</label>
                            <input type="text" className="input text-white" name="name" placeholder="Enter Your Full name" />
                            <label className="label text-lg ">Photo URL</label>
                            <input type="text" className="input text-white" name="Photo" placeholder="Enter Your Photo" />
                            <label className="label text-lg ">Email</label>
                            <input type="email" className="input text-white" name="email" placeholder="Enter Your Email" />
                            <label className="label text-lg ">Password</label>
                            <input type="password" className="input text-white" name="password" placeholder="Password" /><br /><br />
                            <div className="flex justify-between"> <div>Already Logged in? <Link className="btn text-white bg-amber-300 p-2 hover:bg-white hover:text-amber-300 " to="/auth/login">Login Now</Link></div>
                                <button className="btn text-white bg-amber-300 p-2 hover:bg-white hover:text-amber-300 ">Register</button><br /></div>

                            <button onClick={handleGoogleSignIn} className="btn bg-white hover:bg-amber-500 text-gray-700 mt-4"><FcGoogle></FcGoogle> Sign in with Google </button>
                        </form>
                    </div>

                    {error && <p className='text-red-500 text bold'>{error}</p>}
                </div>
            </div>
            <hr className='border-1 border-gray-800' />
        </div>
    );
};

export default Registration;