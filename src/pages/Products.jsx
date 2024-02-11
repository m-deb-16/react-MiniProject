import React from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductItems from "../components/ProductItems";
const Products = () => {
  return (
    <>
      <PageHeader />
      <div className="featured-container">
        <h1 className="featured">Products</h1>
        <div className="row_prod">
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/ram1.jpg")}
              heading="Corsair Vengeance LPX 8GB (1x8GB) DDR4 3200MHZ C16 Desktop
                    RAM"
              price="Rs 1819"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/cabinet1.jpg")}
              heading="Fractal Design North Charcoal Black Dark TG "
              price="Rs 17,324."
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/cabinet2.jpg")}
              heading="Lian Li O11 Dynamic EVO XL Full-Tower Compter Case/Gaming Cabinet - Black"
              price="Rs 25,183"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/hdd.jpg")}
              heading="WD Western Digital Purple 2TB SATA "
              price="Rs 5399"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/gpu1.jpg")}
              heading="ASUS TUF Gaming NVIDIA GeForce RTX™ 4070 Ti OC Edition Gaming Graphics Card (PCIe 4.0, 12GB GDDR6X)"
              price="Rs 1,03,506"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/i5.jpg")}
              heading="Intel® Core™ i5-13400F Processor 20M Cache, up to 4.60 GHz"
              price="Rs 21,450"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/60kb.jpg")}
              heading="Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard w/White and Grey Color Keycaps, Linear Red Switch, Pro Driver/Software Supported"
              price="Rs 2,790"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/mobo2.jpg")}
              heading="GIGABYTE X570S UD Motherboard with Twin 12+2 Phases Digital VRM Solution with 50A DrMOS, Triple Ultra-Fast NVMe PCIe 4.0/3.0 x4 M.2 with Thermal Guard, Fast 2.5GbE LAN, RGB Fusion 2.0, Q-Flash Plus"
              price="Rs 17,500"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/mouse.jpg")}
              heading="Logitech G PRO X Superlight Wireless USB Gaming Mouse, Ultra Lightweight 63 g, Hero 25K Sensor, 25, 600 DPI, 5 Programmable Buttons, Long Battery Life, for Esports, Compatible with PC/Mac-Black"
              price="Rs 10,995"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/dpPSU.jpg")}
              heading="Deepcool DQ850M-V3L, 850 Watt, 80 Plus Gold Fully Modular Power Supply"
              price="Rs 9833"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/smps2.jpg")}
              heading="Corsair VS500, CV Series, 80 Plus Bronze Certified, 500 Watt Non-Modular Power Supply"
              price="Rs 5300"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/ssd.png")}
              heading="Western Digital WD Blue SA510 SATA 500GB, Up to 560MB/s, 2.5 Inch/7 mm, 5Y Warranty, Internal Solid State Drive (SSD)"
              price="Rs 3503"
            />
          </Link>
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/ssdm.2.jpg")}
              heading="Samsung 970 EVO Plus 1TB PCIe NVMe M.2 (2280) Internal Solid State Drive (SSD)"
              price="Rs 6500"
            />
          </Link>
          {/* <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
