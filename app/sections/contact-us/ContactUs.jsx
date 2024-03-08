import GoogleMap from "../../components/gmap/gmap"
import { Address } from "../../components/address/address"
import { FormContactUs } from "../../components/formContactUs/formContactUs"
export const ContactUs = ({ data }) => {
    return (
        <div className="bg-[#EEF2F5] p-10 animate-fade-up animate-once animate-duration-[1500ms]" id="contact-us">
            <div className="bg-[#3D7083] w-fit p-3 rounded-full mb-10 m-auto">
                <h1 className="text-3xl font-bold text-center text-white">
                    Contact Us
                </h1>
            </div>
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