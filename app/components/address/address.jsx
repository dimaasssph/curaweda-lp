import Image from "next/image"
export const Address = ({ data }) => {
    const addresses = data.find((a) => a.key === "office_address")
    const phone = data.find((a) => a.key === "phone")
    const email = data.find((a) => a.key === "email")
    return (
        <div className="p-10">
            <Image src={"/assets/image-3.png"} width={120} height={120} />
            <div className="ml-4">
                <h1 className="my-2 text-xl font-bold text-black">Our Office</h1>
                {addresses.value.map((address, index) => (
                    <p className="mb-5 text-base text-gray-700" key={index}>
                        {address.value}
                    </p>
                ))}
                <div className="flex w-full">
                    <div className="mr-5 w-7">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <p className="mb-5 text-base text-gray-700">{phone.value}</p>
                </div>
                <div className="flex w-full">
                    <div className="mr-5 w-7">
                        <svg className="w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round"></rect> </g></svg>                    </div>
                    <p className="mb-5 text-base text-gray-700">{email.value}</p>
                </div>
            </div>
        </div>
    )
}
