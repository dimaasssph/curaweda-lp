import "./globals.css";
import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner";
import { ProductSection } from "./sections/products";
import { menu } from "./data/menu";
import { products } from "./data/products";
import { useEffect } from "react";

export default function Home() {
  const menus = menu;
  const productsData = products;
  return (
    <div className="bg-white">
      <Navbar menus={menus} logo={"/assets/link-logopng.png"} />
      <Banner />
      <ProductSection products={productsData} />
    </div>
  );
};
