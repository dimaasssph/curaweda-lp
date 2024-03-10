"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = ({ menus, logo }) => {
    const router = useRouter;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="w-full p-3 bg-[#3C7083]" key="navbar-top" />
            <div className="sticky top-0 z-50 w-full h-auto p-5 bg-white shadow-xl" key="navbar-content">
                <div className="flex items-center justify-between">
                    <Image src={logo} width={180} height={50} />
                    <div className="flex mt-2 space-x-8 md:hidden">
                        <button onClick={toggleMenu} className="text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="#000000">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 9a1 1 0 100 2h12a1 1 0 100-2H4zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className={`md:flex hidden md:items-center md:w-auto md:space-x-8`}>
                        {menus.map((menu, index) => (
                            <Link href={menu.link} key={index}>
                                <button className={`group relative h-12 overflow-hidden bg-white text-lg px-3`}>
                                    <span className={`relative group-hover:text-[#106EEA] font-semibold ${router.pathname === menu.link ? 'text-[#106EEA]' : 'text-black'}`}>{menu.title}</span>
                                    <div className={`absolute inset-0 bg-[#106EEA] transition-all duration-[500ms] ease-out group-hover:w-full h-1 mt-auto ${router.pathname === menu.link ? 'w-full' : 'w-0'}`}></div>
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={`${isOpen ? `hidden` : `block`} bg-white w-fit grid grid-cols-1 md:hidden transition-all duration-500 ease-in-out`}>
                    {menus.map((menu, index) => (
                        <Link href={menu.link} key={index}>
                            <button className={`group relative h-12 overflow-hidden bg-white text-lg px-3`}>
                                <span className={`relative group-hover:text-[#106EEA] font-semibold ${router.pathname === menu.link ? 'text-[#106EEA]' : 'text-black'}`}>{menu.title}</span>
                                <div className={`absolute inset-0 bg-[#106EEA] transition-all duration-500 ease-out group-hover:w-full h-1 mt-auto ${router.pathname === menu.link ? 'w-full' : 'w-0'}`}></div>
                            </button>
                        </Link>
                    ))}
                </div>


            </div>
        </>
    );
};

export default Navbar;
