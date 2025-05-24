import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router';
import { ContextAPI } from './ContextApi';
const Navbar = () => {
    const { user } = useContext(ContextAPI);
    const link = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-amber-200 josefin border-b-2 border-amber-200 text-xl" : "text-white josefin text-xl"}>Home</NavLink></li>
        <li><NavLink to="/allRecipe" className={({ isActive }) => isActive ? "text-amber-200 josefin border-b-2 border-amber-200 text-xl" : "text-white josefin text-xl"}>All Recipe</NavLink></li>
        {
            user ? <> <li><NavLink to="/addRecipe" className={({ isActive }) => isActive ? "text-amber-200 josefin border-b-2 border-amber-200 text-xl" : "text-white josefin text-xl"}>Add Recipe</NavLink></li>
                <li><NavLink to="/myRecipe" className={({ isActive }) => isActive ? "text-amber-200 josefin border-b-2 border-amber-200 text-xl" : "text-white josefin text-xl"}>My Recipe</NavLink></li>
            </> : <></>
        }


    </>
    return (
        <div className="navbar bg-[#0b1315] fixed top-0 z-5 shadow-sm py-8 px-2 md:px-[100px] lg:px-[100px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-6xl md:text-8xl lg:text-8xl tang">Earl</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 md:gap-[100px] lg:gap-[30px]">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                    {
                        user ? <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">
                                <img src={user.photoURL} alt="User" className="w-20 h-20 rounded-full border-2 border-amber-200" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li className='py-3'>{user.displayName}</li>
                                <li>SignOut</li>
                            </ul>
                        </div>
                            : <>
                                <Link to="/auth/login" className='btn-xs md:btn-lg lg:btn-lg border-2 border-amber-200 p-2 hover:bg-amber-300 hover:text-white text-sm md:text-lg lg:text-xl rounded-xl' >Sign In</Link>
                                <Link to="/auth/registration" className='btn-xs md:btn-lg lg:btn-lg border-2 border-amber-200 p-2 hover:bg-amber-300 hover:text-white text-sm md:text-lg lg:text-xl rounded-xl' >Sign Up</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;