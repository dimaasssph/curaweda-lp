import "./globals.css";
// import { Navbar } from "./components/navbar/navbar";
import Navbar from "./components/navbar/navbar";
import { Banner } from "./components/banner/banner";
import { menu } from "./data/menu";
import { SectionWithCards } from "./sections/section-with-cards/SectionWithCards";
import { products } from "./data/products";
import { usp } from "./data/usp";
import { portofolio } from "./data/portofolio";
import { ContactUs } from "./sections/contact-us/ContactUs";
import { parameterData } from "./data/parameterData";
import { ClientSection } from "./sections/clients/ClientSection";
import { clients, seenOnMedia } from "./data/clients";

export default function Home() {
  const menus = menu;
  const productsData = products;
  const usps = usp;
  const portofolios = portofolio;
  const parameterDatas = parameterData;
  const seenOnMedias = seenOnMedia;
  const images = clients;

  return (
    <div className="bg-[#BACCCE]">
      <Navbar menus={menus} logo={"/assets/link-logopng.png"} />
      <Banner />
      <div className="w-full">
        <SectionWithCards title={"Our Products"} items={productsData} unique_id={"products"} />
        <SectionWithCards title={"USP"} items={usps} unique_id={"usp"} />
        <SectionWithCards title={"Our Portofolio"} items={portofolios} shadow={true} textCenter={true} unique_id={"portofolio"} />
        <ClientSection data={images} seenOnMedia={seenOnMedias} />
        <ContactUs data={parameterDatas} />
      </div>
    </div>
  );
};
