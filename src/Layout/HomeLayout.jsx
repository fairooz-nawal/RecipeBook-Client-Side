import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const HomeLayout = () => {
    return (
        <div className='max-w-screen mx-auto bg-[#0b1315]'>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default HomeLayout;