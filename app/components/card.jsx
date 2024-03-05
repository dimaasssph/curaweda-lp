
export const Card = ({ item, shadow = false, textCenter = false }) => {
    return (
        <div
            class={`relative flex flex-col mt-6 text-gray-700 bg-transparent hover:shadow-md bg-clip-border rounded-xl pt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#3C7083] hover:text-white duration-400 min-w-300 ${shadow ? 'shadow-xl' : ''}`}
        >
            <div className="relative flex items-center justify-center h-56 mx-4 -mt-6 overflow-hidden bg-clip-border rounded-xl bg-blue-gray-500 ">
                <img
                    src={item.image}
                    alt="card-image"
                    className="block h-auto max-w-full max-h-full " />
            </div>
            <div class="p-6 flex flex-col justify-between">
                <h5 class={`block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ${textCenter ? `text-center` : ''}`} dangerouslySetInnerHTML={{ __html: item.title }} />
                {item.description && (
                    <>
                        <div class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit" dangerouslySetInnerHTML={{ __html: item.description }} />
                    </>
                )}
            </div>
        </div >
    )
}