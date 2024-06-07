// import { createSlice } from "@reduxjs/toolkit";
//

import { createSlice } from "@reduxjs/toolkit";

const initialState = { productImg: false, list: [] };

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const productIsExist = state.list.find((e) => e.code === newProduct.code);

      if (productIsExist) {
        productIsExist.quantity += 1;
        productIsExist.total =
          productIsExist.quantity * parseFloat(productIsExist.price);
        state.productImg = newProduct.img;
      } else {
        state.productImg = newProduct.img;
        state.list.push({
          ...newProduct,
          quantity: 1,
          total: parseFloat(newProduct.price),
        });
      }
    },
    removeProduct: (state, action) => {
      const productCode = action.payload;
      const product = state.list.find((e) => e.code === productCode);
      if (product) {
        if (product.quantity === 1) {
          state.list = state.list.filter((e) => e.code !== productCode);
        } else {
          product.quantity -= 1;
          product.total -= parseFloat(product.price);
        }
      }
      if (state.list.length === 0) {
        state.productImg = false;
      }
    },
    cancel: (state) => {
      state.productImg = false;
      state.list = [];
    },
    switchProductImg: (state, action) => {
      state.productImg = action.payload;
    },
  },
});

export const productSliceAction = productSlice.actions;
export default productSlice.reducer;
