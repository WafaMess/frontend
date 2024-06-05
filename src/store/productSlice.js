import {createSlice} from "@reduxjs/toolkit"

const initialState={productImg:false, list:[]}

const productSlice=createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        addProduct:(state, action)=>{
            const newProduct=action.payload;
            const productIsExist=state.list.find(e=>e.code==newProduct.code)

            if(productIsExist){
                const total=(productIsExist.quantity+1) * parseFloat(Number(productIsExist.price))
                return state={productImg:newProduct.img,list:state.list.map(e=>{
                    if(e.code==productIsExist.code){
                        return {...e,total,quantity:productIsExist.quantity+1}
                    }else{
                        return e
                    }
                })}
            }else{
                return state={productImg:newProduct.img,list:[...state.list,{...newProduct, quantity:1, total:newProduct.price}]}
                
            }

        },
        removeProduct:(state, action)=>{
            const productCode=action.payload;
            const productIsExistWithOneTime=state.list.find(e=>{
                return e.quantity===1&&e.code==productCode
            })
            if(productIsExistWithOneTime){
                return state={productImg:false, list:state.list.filter(e=>{
                    return e.code!=productCode
                })}
            }else{
                return state={productImg:false, list:state.list.map(e=>{
                    if(e.code==productCode)return {...e, quantity:e.quantity-1,total:Number(e.total-e.price)}
                    else return e
                })}
            }
            
        },
        cancel:(state, action)=>{
            return state={...state, list:[]}
        },

        switchProductImg:(state, action)=>{
            const productImg=action.payload;

            return state={...state, productImg}
        }
        
    }
})

export const productSliceAction=productSlice.actions;
export default productSlice.reducer;
