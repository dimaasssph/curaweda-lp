import { Card } from "../../components/card/card"

export const SectionWithCards = ({ title, items, shadow = false, textCenter = false, unique_id }) => {
    return (
        <div className="p-[50px] bg-[#D7E0DF] mb-5 w-full" id={unique_id}>
            <h1 className="text-3xl font-bold text-center text-black">
                {title}
            </h1>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="flex flex-wrap justify-center space-x-5 align-middle">
                {items.map((item, index) => (
                    <Card key={index} item={item} shadow={shadow} textCenter={textCenter} />
                ))}
            </div>
        </div>
    )
}