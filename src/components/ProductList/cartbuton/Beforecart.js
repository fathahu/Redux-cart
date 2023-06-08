import React from "react";
import {useDispatch} from 'react-redux';
import { addTocart } from "../../../rdux/cart";

const Beforecart = ({product}) => { 
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button className="bg-[#0808bd] text-white p-2 rounded-md" onClick={()=>(dispatch(addTocart(product)))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Beforecart;
