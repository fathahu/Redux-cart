import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchUser = createAsyncThunk("cart/fetchUser", async () =>{
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return response;
})

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  useDetail:{}
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
  extraReducers:{
    [fetchUser.pending]:(state,action) =>{

    },
    [fetchUser.fulfilled]:(state,action) =>{},
    [fetchUser.rejected]:(state,action) =>{},
  }
});

export const { addTocart,incriment,decriment} = cartSlice.actions;

export default cartSlice.reducer;
