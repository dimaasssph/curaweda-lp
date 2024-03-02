// import { useEffect } from "react"
import { ProductCard } from "../components/card-product"
// import Image from "next/image"
export const ProductSection = ({ products }) => {
    return (
        <div className="p-5 bg-gradient-to-b from-violet-50 via-neutral-50 to-zinc-50">
            <h1 className="text-6xl font-bold text-center text-black">
                Our Products
            </h1>
            <div className="grid grid-cols-1 gap-5 p-5 m-5 space-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}