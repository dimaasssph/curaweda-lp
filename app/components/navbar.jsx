"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { usePathName } from "next/navigation"

export const Navbar = ({ menus, logo }) => {
    const pathname = usePathName

    useEffect(() => {
        console.log(pathname)
    }, [])

    return (
        <>
            <div className="w-full p-3 bg-[#3C7083]" key="navbar-top" />
            <div className="sticky top-0 z-50 flex w-full h-auto p-5 align-middle bg-white shadow-xl" key="navbar-content">
                <Image src={logo} width={180} height={50} />
                <div className="flex mt-2 ml-auto mr-10 space-x-8 align-middle">
                    {menus.map((menu, index) => (
                        <Link href={menu.link} >
                            <h1 key={`menu-${index}`} className="font-sans text-xl transition-all duration-300 ease-in-out hover:-translate-y-1 text-slate-950 hover:text-slate-500 hover:scale-125">
                                {menu.title}
                            </h1>
                        </Link>
                    ))}
                </div>
            </div>
        </>

    )
}