import { Remove } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isUsed:false,
    data:{}
}

const fidelitySlice=createSlice({
    name:"fidelitySlice",
    initialState,
    reducers:{
        add:(state, action)=>{
            const data=action.payload;
            return state={...state, data:data}
        }
        ,
        use:(state, action)=>{
            return state={...state, isUsed:true}
        },
        dontUse:(state, action)=>{
            return state={...state, isUsed:false}
        },
        Remove:(state, action)=>{
            return state={isUsed:false, data:{}}
        }
    }
})

const fidelitySliceActions=fidelitySlice.actions;
export default fidelitySliceActions;

export const fidelitySliceReducer=fidelitySlice.reducer;