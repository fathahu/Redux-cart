import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const {cartList} = useSelector(state => state.cart);
  return (
    <div><h1>{cartList?.length}</h1></div>
  )
}

export default Header