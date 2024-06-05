import { configureStore } from "@reduxjs/toolkit";

//slices
import productSlice from "./productSlice";
import { fidelitySliceReducer } from "./fidelitySlice";
import { promoSliceReducer } from "./PromoSlice";
import settingsSliceReducer from "./settingsSlice";


const store=configureStore({
    reducer:{
        productStore:productSlice, 
        fidelityStore:fidelitySliceReducer,
        promoStore:promoSliceReducer,
        settings:settingsSliceReducer
    }
})

export default store;

