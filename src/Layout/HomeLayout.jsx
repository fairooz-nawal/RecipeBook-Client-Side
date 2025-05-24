import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { ContextAPI } from '../components/ContextApi';
const HomeLayout = () => {
  const {light} = useContext(ContextAPI);
    return (
        <div className={light?`max-w-full mx-auto bg-lime-100`:`max-w-full mx-auto bg-[#0b1315]`}>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default HomeLayout;