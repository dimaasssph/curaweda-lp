import Image from "next/image"
export const Banner = () => {
    return (
        // <div className="w-full p-20 bg-[url(/assets/image-92-bg.png)]">
        //     <Image src={"/assets/image-3.png"} width={200} height={200} />
        //     <h1 className="font-sans text-4xl font-bold text-black">
        //         The Game changer of ERP
        //     </h1>
        //     <p className="mt-10 font-mono text-xl text-gray-800 line-clamp-3">
        //         Curaweda optimizes processes, reducing human errors and coordination lines.
        //         <br />
        //         <br />
        //         Our modular algorithms offer a cost-effective and precise ERP solution, providing a competitive edge globally.
        //     </p>
        //     <h1 className="mt-3 font-sans text-2xl font-bold text-black">System That Adapt You</h1>
        //     <div className="p-5 mt-3 text-white bg-blue-500 rounded-lg w-fit">
        //         <h1 className="font-sans text-2xl font-bold text-white ">Get Started</h1>
        //     </div>
        // </div>
        <section class="bg-white bg-[url(/assets/image-92-bg.png)] h-[calc(100vh-150px)]">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 justify-center items-center">
                <div class="mr-auto lg:col-span-7">
                    <Image src={"/assets/image-3.png"} width={200} height={200} />
                    <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-black">The Game Changer of ERP</h1>
                    <p class="max-w-2xl text-lg md:text-lg text-black">Curaweda optimize processes, reducing human errors and coordination lines.</p>
                    <p class="max-w-2xl mb-6 text-lg lg:mb-8 md:text-lg text-black">Our modular algorithms offer a cost-effectives and precice ERP solution, providing a competitive edge globally</p>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-2xl font-medium hover:scale-110 transition-all text-center text-white bg-[#3C7083] rounded-[75px]">
                        Get Started
                    </a>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <iframe class="aspect-[16/9] w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </section>

    )
}