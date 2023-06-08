import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addTocart: (state,action) => {
      const itemExist = state.cartList.find((item) => item.id === action.payload.id);
      if(itemExist) {
        state.cartList.forEach((item)=>{
          if(item?.id === action.payload.id){
            item.count = 1;
          }
        })
        return;
      }
     
         state.cartList.push({
          ...action.payload,
          count:1});
        
    },
    incriment: (state,action) => {
        const productID = action.payload;
        state.cartList.forEach((item)=>{
          if(item?.id === productID){
            item.count++;
          }
        })
    },
    decriment: (state,action) => {
      const productID = action.payload;
      state.cartList.forEach((item)=>{
        if(item?.id === productID){
          item.count--;
        }
      })

    },
  },
});

export const { addTocart,incriment,decriment} = cartSlice.actions;

export default cartSlice.reducer;
