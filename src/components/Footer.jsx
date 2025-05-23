import { FaAddressBook } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-[#0b1315] text-neutral-content p-10">
            <div className="flex flex-col md:flex-row md:justify-baseline lg:flex-row lg:justify-between py-3 px-2 md:px-[100px] lg:px-[100px]">
                <aside>
                    <a className="btn btn-ghost text-5xl mb-5 md:text-6xl lg:text-6xl tang">Earl</a>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5">
                        <div className="">
                            <div className="flex items-center gap-1">
                                <FaAddressBook className="text-base md:text-xl lg:text-xl"></FaAddressBook>
                                <p className='text-lg md:text-3xl lg:text-3xl tang'> Address:</p>
                            </div>
                            <p className='josefin text-white'>Street: 3840 Winifred Way, Marion <br />United States</p>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-1">
                                <IoIosContact className="text-base md:text-xl lg:text-xl"></IoIosContact>
                                <p className='text-lg md:text-3xl lg:text-3xl tang'> Contact Us:</p>
                            </div>
                            <p className='josefin text-white'>(123) 23456 788 123 4578 954 <br />Open: 09:00 am – 01:00 </p>
                        </div>
                    </div>
                </aside>
                <nav>
                    <h6 className="text-lg md:text-2xl lg:text-4xl tang">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.facebook.com/fairooz.nawal"><FaFacebook className="text-2xl md:text-xl lg:text-xl"></FaFacebook></Link>
                        <Link to="https://github.com/fairooz-nawal"><FaGithub className="text-2xl md:text-xl lg:text-xl"></FaGithub></Link>
                        <Link to="https://www.linkedin.com/in/syeda-fairooz-nawal-softwaredeveloper/"><FaLinkedin className="text-2xl md:text-xl lg:text-xl"></FaLinkedin></Link>
                    </div>
                </nav>
            </div>

            <aside className="flex justify-center items-center py-3 px-2 md:px-[100px] lg:px-[100px]">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Earl</p>
            </aside>
        </footer>
    );
};

export default Footer;