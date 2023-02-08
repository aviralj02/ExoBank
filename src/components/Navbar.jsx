import { useState } from "react";
import { close, logo, menu } from '../assets';  
import { navLinks } from '../constants';
import { styles } from "../style";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return ( 
        <nav className="w-full flex py-6 items-center navbar">
            <img src={logo} alt='exobank' className="w-[130px] h-[55px]" />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((link, index) => (
                    <li     
                        key={link.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${styles.linkHover} text-white ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}
                    >
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ) )}
            </ul>

            {/* nav links for mobile devices */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                    src={toggle ? close : menu} 
                    alt="menu" 
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => {
                        setToggle((prev) => (!prev));
                    }} 
                />

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar`}
                >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((link, index) => (
                            <li     
                                key={link.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] hover:scale-110 text-white ${index === navLinks.length-1 ? 'mb-0' : 'mb-10'}`}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ) )}
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;