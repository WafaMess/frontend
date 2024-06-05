import { createSlice } from "@reduxjs/toolkit";


const initialState=0

const promoSlice=createSlice({
    name:"promoSlice",
    initialState,
    reducers:{
        add:(state, action)=>{
            const data=action.payload;
            return state=data
        }
        
    }
})

const promoSliceActions=promoSlice.actions;
export default promoSliceActions;

export const promoSliceReducer=promoSlice.reducer;