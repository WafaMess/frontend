import { Remove } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    design:{mainColor:null, secondColor:null},
    settings:{rechercheArticle:true,codePromoSettings:{
            byNum:true,
    byScan:true
    },
    fidelitySettings:{
        byNum:true,
        byScan:true,
        byPhone:true
    }
    },
    options:{}
}

const settingsSlice=createSlice({
    name:"setting",
    initialState,
    reducers:{
        changeDesign:(state, action)=>{
            const data=action.payload;
            return state={...state, settings:data}
        }
        ,
        changeDesign:(state, action)=>{
            const data=action.payload;
            return state={...state, design:data}
        },
        changeOptions:(state, action)=>{
            const data=action.payload;
            return state={...state, options:data}
        }
    }
})

export const settingsActions=settingsSlice.actions;
const settingsSliceReducer=settingsSlice.reducer;
export default settingsSliceReducer
