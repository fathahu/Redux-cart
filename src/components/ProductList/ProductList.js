import React   from "react";
import Products from "../../api/product.json";
// import { useSelector } from "react-redux";
import Btnindex from "./cartbuton/Btnindex";

const ProductList = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        {Products.map((product, key) => (
          <div className="" key={key}>
            <img src={product?.image} alt="phone" />
            <div className="text-center ">
              <h1>{product?.title}</h1>
              <Btnindex product = {product}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
