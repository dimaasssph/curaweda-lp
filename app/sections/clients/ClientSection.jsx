export const ClientSection = ({ data, seenOnMedia }) => {
    return (
        <div className="pt-5">
            {/* <div className="m-auto"> */}
            <h1 className=" text-center text-4xl font-bold text-[#3C7083]">Our Clients & Partners</h1>
            {/* </div> */}
            <div className="w-full p-[100px] flex flex-wrap flex-grow align-middle justify-center space-x-3 space-y-3">
                {data.map((image, index) => (
                    <figure class="max-w-lg" key={index}>
                        <img key={index} class="h-auto w-28 rounded-lg" src={image} alt="image description" />
                    </figure>
                ))}
            </div>
            {/* <div className="mx-auto"> */}
            <h1 className="text-4xl font-bold text-[#3C7083] text-center">Our Clients & Partners</h1>
            {/* </div> */}
            <div className="w-full p-[100px] flex flex-wrap flex-grow align-middle justify-center space-x-3 space-y-3">
                {seenOnMedia.map((image, index) => (
                    <figure class="max-w-lg" key={index}>
                        <img key={index} class="h-auto w-28 rounded-lg" src={image} alt="image description" />
                    </figure>
                ))}
            </div>
        </div>
    )
}