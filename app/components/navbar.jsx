import Link from "next/link"
import Image from "next/image"
export const Navbar = ({ menus, logo }) => {
    return (
        <>
            <div className="w-full h-2 bg-slate-200" />
            <div className="w-full p-5 h-15 bg-gradient-to-r from-gray-300 to-gray-400" key="navbar-top"></div>
            <div className="flex w-full h-auto p-5 align-middle bg-white" key="navbar-content">
                <Image src={logo} width={200} height={50} />
                <div className="flex mt-2 ml-auto mr-10 space-x-8 align-middle">
                    {menus.map((menu, index) => (
                        <Link href={menu.link}>
                            <h1 key={`menu-${index}`} className="font-sans text-2xl transition-colors duration-300 ease-in-out text-slate-950 hover:text-slate-500">
                                {menu.title}
                            </h1>
                        </Link>
                    ))}
                </div>
            </div >

        </>
    )
}