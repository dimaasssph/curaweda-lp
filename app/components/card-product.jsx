// import { useEffect } from "react"
export const ProductCard = ({ product }) => {
    // useEffect(() => {
    //     console.log(product)
    // }, [])
    return (
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 pt-10">
            <div className="relative flex items-center justify-center h-56 mx-4 -mt-6 overflow-hidden bg-clip-border rounded-xl bg-blue-gray-500 ">
                <img
                    src={product.image}
                    alt="card-image"
                    className="block h-auto max-w-full max-h-full" />
            </div>

            <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {product.title}
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {product.description}
                </p>
            </div>
        </div>
    )
}