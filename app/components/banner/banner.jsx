import Image from "next/image"
export const Banner = () => {
    return (
        <section class="bg-white bg-[url(/assets/image-92-bg.png)] h-auto p-5">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 justify-center items-center">
                <div class="mr-auto lg:col-span-7">
                    <Image src={"/assets/image-3.png"} width={200} height={200} />
                    <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl text-black">The Game Changer of ERP</h1>
                    <p class="max-w-2xl text-lg md:text-lg text-black font-normal">Curaweda optimize processes, reducing human errors and coordination lines.</p>
                    <p class="max-w-2xl mb-6 text-lg lg:mb-8 md:text-lg text-black font-normal">Our modular algorithms offer a cost-effectives and precice ERP solution, providing a competitive edge globally</p>
                    <p class="max-w-2xl mb-6 text-lg lg:mb-8 md:text-lg text-black font-bold">System That Adapt You</p>
                    <a href="#products" class="inline-flex items-center justify-center px-5 py-3 text-2xl font-medium hover:scale-110 transition-all text-center text-white bg-[#3C7083] rounded-[75px]">
                        Get Started
                    </a>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5Z7I53jCYCc?si=vtBBHHdhoz2lH91c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>

    )
}