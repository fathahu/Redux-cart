import React, { useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import { ProductList } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./rdux/cart";

const App = () => {
  const { useDetail } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const countref = useRef(1);
  useEffect(() => {
    dispatch(fetchUser(countref.current));
  }, []);

  const loadmoreUsers = () => {
    dispatch(fetchUser(++countref.current)); 
    // console.log(userref.current, "==ref");
  };
  return (
    <>
      <Header />
      <ProductList />
      <button onClick={loadmoreUsers}>Next User</button>
      <pre>
        <h2>{JSON.stringify(useDetail, undefined, 4)}</h2>
      </pre>
    </>
  );
};

export default App;
