import "./globals.css";
import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner";
import { menu } from "./data/menu";
import { SectionWithCards } from "./sections/SectionWithCards";
import { products } from "./data/products";
import { usp } from "./data/usp";
import { portofolio } from "./data/portofolio";
import { ContactUs } from "./sections/ContactUs";
import { parameterData } from "./data/parameterData";

export default function Home() {
  const menus = menu;
  const productsData = products;
  const usps = usp;
  const portofolios = portofolio;
  const parameterDatas = parameterData;
  return (
    <div className="bg-[#BACCCE]">
      <Navbar menus={menus} logo={"/assets/link-logopng.png"} />
      <Banner />
      <div className="container">
        <SectionWithCards title={"Our Products"} items={productsData} />
        <SectionWithCards title={"USP"} items={usps} />
        <SectionWithCards title={"Our Portofolio"} items={portofolios} shadow={true} textCenter={true} />
        <ContactUs data={parameterData} />
      </div>
    </div>
  );
};
