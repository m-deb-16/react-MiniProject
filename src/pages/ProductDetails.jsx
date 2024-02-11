import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const ProductDetails = () => {
  return (
    <>
      <PageHeader />
      <section>
        <div className="container-full l-bg">
          <div className="container pad">
            <h1>Product</h1>
          </div>
        </div>
        <div className="container-full margin-top">
          <div className="container">
            <div className="product-container">
              <div className="row_prod_det">
                <div className="col_prod_det">
                  <img src={require("../imgs/ram1.jpg")} alt="" />
                </div>
                <div className="col-prod-det details">
                  {/* details */}
                  <h4>
                    Corsair Vengeance LPX 8GB (1x8GB) DDR4 3200MHZ C16 Desktop
                    RAM
                  </h4>
                  <br />
                  <h4>Corsair</h4>
                  <br />
                  <h4>Sold by: Corsair</h4>
                  <br />
                  <br />
                  <h5>Price</h5>
                  <h5>Rs 1,819</h5>
                  <Link to="" className="button">
                    Buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-full">
          <div className="container">
            <div className="review">
              <h3>Reviews</h3>
              <div className="row2_prod_det">
                <div className="col2_prod_det">
                  <h5>Mainak: </h5>
                  <p>Best in class</p>
                </div>
                <div className="col2_prod_det">
                  <h5>Rishabh: </h5>
                  <p>Kingston offers more value for money</p>
                </div>
                <div className="col2_prod_det">
                  <h5>Sayandeep: </h5>
                  <p>Good</p>
                </div>
                <div className="col2_prod_det">
                  <h5>Jiku: </h5>
                  <p>Bad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
