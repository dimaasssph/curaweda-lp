import Image from "next/image"
export const ClientSection = ({ data, seenOnMedia }) => {
    return (
        <div className="pt-5">
            {/* <div className="m-auto"> */}
            <h1 className=" text-center text-4xl font-bold text-[#3C7083]">Our Clients & Partners</h1>
            {/* </div> */}
            <div className="w-full p-[100px] lg:px-[300px] flex flex-wrap flex-grow align-middle justify-center space-x-3 space-y-3">
                {data.map((image, index) => (
                    <figure key={index}>
                        <Image key={index} width={image.w} height={image.h} data-aos="fade-up" data-aos-duration="2500" src={image.image} alt="image description" />
                    </figure>
                ))}
            </div>
            {/* <div className="mx-auto"> */}
            <h1 className="text-4xl font-bold text-[#3C7083] text-center">As Seen On Media</h1>
            {/* </div> */}
            <div className="w-full p-[100px] flex flex-wrap flex-grow align-middle justify-center space-x-3 space-y-3">
                {seenOnMedia.map((image, index) => (
                    <figure key={index}>
                        <Image key={index} width={image.w} height={image.h} data-aos-duration="2500" data-aos="fade-up" src={image.image} alt="image description" />
                    </figure>
                ))}
            </div>
        </div>
    )
}