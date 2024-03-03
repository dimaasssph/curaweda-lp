import { Card } from "../components/card"

export const SectionWithCards = ({ title, items }) => {
    return (
        <div className="p-[100px] bg-white">
            <h1 className="text-3xl font-bold text-center text-black">
                {title}
            </h1>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="grid grid-cols-1 gap-3 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
    )
}