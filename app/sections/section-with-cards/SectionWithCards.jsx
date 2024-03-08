import { Card } from "../../components/card/card"

export const SectionWithCards = ({ title, items, shadow = false, textCenter = false, unique_id }) => {
    return (
        <div className="p-[100px] bg-[#D7E0DF] mb-5" id={unique_id}>
            <h1 className="text-3xl font-bold text-center text-black">
                {title}
            </h1>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="grid grid-cols-1 gap-3 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((item, index) => (
                    <Card key={index} item={item} shadow={shadow} textCenter={textCenter} />
                ))}
            </div>
        </div>
    )
}