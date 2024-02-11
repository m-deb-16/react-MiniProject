import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductItems from "../components/ProductItems";
export const Home = () => {
  return (
    <>
      <div className="hero-container">
        <Nav />
        <div className="row">
          <div className="col">
            <h1>Tech's finest, yours now.</h1>
            <p>
              Explore a digital universe of cutting-edge technology. Elevate
              your experience with our premium selection.
            </p>
            <Link to="./products" className="button">
              Explore now
            </Link>
          </div>
          <div className="col">
            <img src={require("../imgs/heroImg.png")} alt="" />
          </div>
        </div>
      </div>

      <div className="categories-container">
        <h1 className="categories">Categories</h1>
        <div className="row">
          <div className="col2">
            <img src={require("../imgs/cabinet1.jpg")} alt="" />
            <h4>Chasis</h4>
          </div>
          <div className="col2">
            <img src={require("../imgs/i5.jpg")} alt="" />
            <h4>Internal Components</h4>
          </div>
          <div className="col2">
            <img src={require("../imgs/mouse.jpg")} alt="" />
            <h4>Peripherals</h4>
          </div>
        </div>
      </div>

      <div className="featured-container">
        <h1 className="featured">Featured Products</h1>
        <div className="row2">
          <ProductItems
            imageSrc={require("../imgs/cabinet1.jpg")}
            heading="Fractal Design North Charcoal Black Dark TG "
            price="Rs 17,324."
          />
          <ProductItems
            imageSrc={require("../imgs/mouse.jpg")}
            heading="Logitech G PRO X Superlight Wireless USB Gaming Mouse, Ultra Lightweight 63 g, Hero 25K Sensor, 25, 600 DPI, 5 Programmable Buttons, Long Battery Life, for Esports, Compatible with PC/Mac-Black"
            price="Rs 10,995"
          />
          <ProductItems
            imageSrc={require("../imgs/60kb.jpg")}
            heading="Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard w/White and Grey Color Keycaps, Linear Red Switch, Pro Driver/Software Supported"
            price="Rs 2,790"
          />
          <ProductItems
            imageSrc={require("../imgs/mobo2.jpg")}
            heading="GIGABYTE X570S UD Motherboard with Twin 12+2 Phases Digital VRM Solution with 50A DrMOS, Triple Ultra-Fast NVMe PCIe 4.0/3.0 x4 M.2 with Thermal Guard, Fast 2.5GbE LAN, RGB Fusion 2.0, Q-Flash Plus"
            price="Rs 17,500"
          />
          <Link className="ProductLink" to="/ProductDetails">
            <ProductItems
              imageSrc={require("../imgs/ram1.jpg")}
              heading="Corsair Vengeance LPX 8GB (1x8GB) DDR4 3200MHZ C16 Desktop
                    RAM"
              price="Rs 1819"
            />
          </Link>
          <ProductItems
            imageSrc={require("../imgs/gpu1.jpg")}
            heading="ASUS TUF Gaming NVIDIA GeForce RTX™ 4070 Ti OC Edition Gaming Graphics Card (PCIe 4.0, 12GB GDDR6X)"
            price="Rs 1,03,506"
          />
          {/* <div className="col3">
            <img
              src="https://dummyimage.com/600x400/000/fff&text=placeholder"
              alt=""
            />
            <h4>item name</h4>
            <p>Rs XXXXX</p>
          </div>
          <div className="col3">
            <img
              src="https://dummyimage.com/600x400/000/fff&text=placeholder"
              alt=""
            />
            <h4>item name</h4>
            <p>Rs XXXXX</p>
          </div>
          <div className="col3">
            <img
              src="https://dummyimage.com/600x400/000/fff&text=placeholder"
              alt=""
            />
            <h4>item name</h4>
            <p>Rs XXXXX</p>
          </div>
          <div className="col3">
            <img
              src="https://dummyimage.com/600x400/000/fff&text=placeholder"
              alt=""
            />
            <h4>item name</h4>
            <p>Rs XXXXX</p>
          </div>
          <div className="col3">
            <img
              src="https://dummyimage.com/600x400/000/fff&text=placeholder"
              alt=""
            />
            <h4>item name</h4>
            <p>Rs XXXXX</p>
          </div>
          <div className="col3">
            <img
              src="https://dummyimage.com/600x400/000/fff&text=placeholder"
              alt=""
            />
            <h4>item name</h4>
            <p>Rs XXXXX</p>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
