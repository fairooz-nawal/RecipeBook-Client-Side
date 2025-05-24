import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { ContextAPI } from '../components/ContextApi';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
const Login = () => {
    const { signInUser, signUpWithGoogle, setUser } = useContext(ContextAPI);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        // const photo = e.target.Photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const userDetails = { displayName: name, photoURL: photo };
        // updateUser(userDetails);

        setError('');
            signInUser(email, password)
                .then((result) => {
                    const user = result.user;
                    //success message
                    if (user) {
                        Swal.fire({
                            title: "Login Done Successfully",
                            icon: "success",
                            draggable: true
                        });
                    }
                    navigate(location?.state || '/');
                })
                .catch((error) => {
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
                    setError(errorMessage);
                    navigate('/auth/login');
                });
    }

    const handleGoogleSignIn = () => {
        signUpWithGoogle()
            .then((result) => {
                const user = result.user;
                if (user) {
                    Swal.fire({
                        title: "Login Done Successfully",
                        icon: "success",
                        draggable: true
                    });
                }
                navigate(location?.state || '/');
            })
            .catch((error) => {
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
                navigate('/auth/login');
            });
    }
    return (
        <div className='bg-secondary'>
            <ToastContainer />
            <div className="hero bg-[#0b1315] min-h-screen ">
                <div className="card text-gray-200  space-y-4 w-full max-w-sm border-2 border-amber-300 rounded-2xl shrink-0 shadow-2xl my-[200px] md:my-[100px] lg:my-[150px] p-5 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitForm}>
                            <label className="label text-lg ">Email</label>
                            <input type="email" className="input text-white" name="email" placeholder="Enter Your Email" />
                            <label className="label text-lg ">Password</label>
                            <input type="password" className="input text-white" name="password" placeholder="Password" /><br /><br />
                            <div><a className="link link-hover">Forgot password?</a></div><br />
                            <div className="flex justify-between">
                                <div>
                                    Haven't Register Yet?
                                    <Link to="/auth/registration" className="btn text-white bg-amber-300 p-2 hover:bg-white hover:text-amber-300 ">Register Now</Link>
                                </div>
                                <button className="btn text-white bg-amber-300 p-2 hover:bg-white hover:text-amber-300 ">Login</button><br />
                            </div>
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

export default Login;