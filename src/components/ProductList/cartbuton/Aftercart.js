import React from 'react'
import {useDispatch} from 'react-redux';
import {  decriment, incriment } from '../../../rdux/cart';
const Aftercart = ({cartCount , productID}) => {
  const dispatch = useDispatch();
  // const {cartCount} = useSelector((state) => state.cart);

  return (
    <div>
        <div className='flex text-center ps-10'>
            <button className='bg-[#e4e0e0] p-3'onClick={()=>dispatch(decriment(productID)) }>-</button>
            <div className='p-3'>{cartCount}</div>
            <button className=' bg-[#e4e0e0] p-3' onClick={()=>dispatch(incriment(productID)) }>+</button>
        </div>
    </div>
  )
}

export default Aftercart