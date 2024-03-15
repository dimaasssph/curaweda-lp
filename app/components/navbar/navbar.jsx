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
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                              <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
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
