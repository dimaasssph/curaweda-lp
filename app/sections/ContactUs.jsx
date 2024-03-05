import GoogleMap from "../components/gmap"
import { Address } from "../components/address"
import { FormContactUs } from "../components/formContactUs"
export const ContactUs = ({ data }) => {
    return (
        <div className="bg-[#EEF2F5] p-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                    <Address data={data} />
                </div>
                <div className="md:col-span-1">
                    <GoogleMap />
                </div>
                <div className="md:col-span-1">
                    <FormContactUs />
                </div>
            </div>

        </div>
    )
}