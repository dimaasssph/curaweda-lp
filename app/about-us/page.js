import "../globals.css";
import {
    Navbar
} from "../components/navbar/navbar";
import {
    Banner
} from "../components/banner/banner";
import {
    menu
} from "../data/menu";
import {
    SectionWithCards
} from "../sections/section-with-cards/SectionWithCards";
import {
    products
} from "../data/products";
import {
    usp
} from "../data/usp";
import {
    portofolio
} from "../data/portofolio";
import {
    ContactUs
} from "../sections/contact-us/ContactUs";
import {
    parameterData
} from "../data/parameterData";


export default function AboutUs() {
    const menus = menu;
    const productsData = products;
    const usps = usp;
    const portofolios = portofolio;
    const parameterDatas = parameterData;

    return (
        <div className="bg-[#BACCCE]" >
            <Navbar menus={menus} logo={"/assets/link-logopng.png"} />
            <Banner />
        </div>
    );
};