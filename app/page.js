import "./globals.css";
import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner";
import { menu } from "./data/menu";
import { SectionWithCards } from "./sections/SectionWithCards";
import { products } from "./data/products";
import { usp } from "./data/usp";

export default function Home() {
  const menus = menu;
  const productsData = products;
  const usps = usp;
  const dataHsCrousel = {
    loadingClasses: "opacity-0",
    isAutoPlay: true
  }
  return (
    <div className="bg-white">
      <Navbar menus={menus} logo={"/assets/link-logopng.png"} />
      <Banner />
      <SectionWithCards title={"Our Products"} items={productsData} />
      <SectionWithCards title={"USP"} items={usps} />
    </div>
  );
};
