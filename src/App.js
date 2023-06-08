import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import {ProductList} from './components'
import { useDispatch } from 'react-redux'
import { fetchUser } from './rdux/cart'

const App = () => {
  const dispatch =  useDispatch();
  useEffect(() => {
    dispatch(fetchUser( ))
  },[])
  return (
    <>
    <Header/>
    <ProductList/>
    </>
    
  )
}

export default App