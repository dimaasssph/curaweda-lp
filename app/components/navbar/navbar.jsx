"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export const Navbar = ({ menus, logo }) => {
    const pathName = usePathname();
    return (
        <>
            <div className="w-full p-3 bg-[#3C7083]" key="navbar-top" />
            <div className="sticky top-0 z-50 flex w-full h-auto p-5 align-middle bg-white shadow-xl" key="navbar-content">
                <Image src={logo} width={180} height={50} />
                <div className="flex mt-2 ml-auto mr-10 space-x-8 align-middle">
                    {menus.map((menu, index) => (
                        <Link href={menu.link} key={index}>
                            <button class={`group relative h-12 overflow-hidden bg-white text-lg px-3`}>
                                <span class={`relative  group-hover:text-[#106EEA] font-semibold ${pathName === menu.link ? `text-[#106EEA]` : `text-black`}`}>{menu.title}</span>
                                <div class={`absolute inset-0 bg-[#106EEA] transition-all duration-[500ms] ease-out group-hover:w-full h-1 mt-auto ${pathName === menu.link ? 'w-full' : 'w-0'}`}></div>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </>

    )
}