import "../globals.css";
import {
    Navbar
} from "../components/navbar/navbar";
import {
    menu
} from "../data/menu";
import { FounderSection } from "../sections/founders/founderSection";


export default function AboutUs() {
    const menus = menu;

    return (
        <div className="bg-[#BACCCE]" >
            <Navbar menus={menus} logo={"/assets/link-logopng.png"} />
            <FounderSection />
        </div>
    );
};