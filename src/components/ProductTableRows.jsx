import React from "react";
import { useDispatch } from "react-redux";
import { productSliceAction } from "../store/productSlice";

const ProductTableRows = ({selectedProductCodeToDelete,code,name,img, price , quantity , total,setSelectedProductCodeToDeleteHander}) => {


  const dispatch=useDispatch()

  return (
    <tr style={code===selectedProductCodeToDelete?{backgroundColor:"red",color:"white"}:{}} onClick={_=>{
      setSelectedProductCodeToDeleteHander(code)
      dispatch(productSliceAction.switchProductImg(img))
    }}
      
    >
      <td>{name}</td>
      <td>{Number(price).toFixed(2)}</td>
      <td>{quantity}</td>
      <td>{Number(total).toFixed(2)}</td>
    </tr>
  );
};

export default ProductTableRows;
