import Image from "next/image"
export const Banner = () => {
    return (
        <div className="w-full p-20 bg-[url(/assets/image-92-bg.png)]">
            <Image src={"/assets/image-3.png"} width={200} height={200} />
            <h1 className="font-sans text-4xl font-bold text-black">
                The Game changer of ERP
            </h1>
            <p className="mt-10 font-mono text-xl text-gray-800 line-clamp-3">
                Curaweda optimizes processes, reducing human errors and coordination lines.
                <br />
                <br />
                Our modular algorithms offer a cost-effective and precise ERP solution, providing a competitive edge globally.
            </p>
            <h1 className="mt-3 font-sans text-2xl font-bold text-black">System That Adapt You</h1>
            <div className="p-5 mt-3 text-white bg-blue-500 rounded-lg w-fit">
                <h1 className="font-sans text-2xl font-bold text-white ">Get Started</h1>
            </div>
        </div>
    )
}