import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className='flex justify-between items-center flex-col lg:flex-row py-5 md:py-12'>
            <div>
                <h1 className=" text-2xl md:text-3xl font-bold text-[#131313]">Book Vibe</h1>
            </div>
            <div className='flex lg:hidden' onClick={handleOpen}>
                {
                    open ? <IoMdClose /> : <IoMenu />
                }
            </div>
            <div className={`${open ? '' : 'hidden'} lg:flex gap-4 text-lg font-normal text-[#131313]/[0.8] duration-1000`}>
                <NavLink to={"/"}><p>Home</p></NavLink>
                <NavLink to={"/listed-books"}><p>Listed Books</p></NavLink>
                <NavLink><p>Pages to Read</p></NavLink>
            </div>
            <div>
                <button className="btn bg-[#23BE0A] text-white hover:bg-transparent hover:text-black">Sign In</button>
                <button className="btn bg-[#59C6D2] text-white hover:bg-transparent hover:text-black">Sign Up</button>
            </div>
        </div>

    );
};

export default Navbar;