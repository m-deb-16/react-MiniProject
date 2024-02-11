import React from "react";

const ProductItems = ({ imageSrc, heading, price }) => {
  return (
    <>
      <div className="col_prod">
        <img src={imageSrc} alt="" />
        <h4>{heading}</h4>
        <p>{price}</p>
      </div>
    </>
  );
};

export default ProductItems;
