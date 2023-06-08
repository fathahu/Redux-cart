import React from "react";
import Aftercart from "./Aftercart";
import Beforecart from "./Beforecart";
import { useSelector } from "react-redux";

const Btnindex = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);
  const cartCount = cartList?.find((item) => item?.id === product?.id)?.count;

  console.log(cartList);
  return (
    <div>
      {cartCount > 0 ? (
        <Aftercart productID={product?.id} cartCount={cartCount} />
      ) : (
        <Beforecart product={product} />
      )}
    </div>
  );
};

export default Btnindex;
