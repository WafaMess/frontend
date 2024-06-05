import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import fidelitySliceActions from "../store/fidelitySlice";

const UseFidility = () => {
  const { productStore, fidelityStore, promoStore:promo } = useSelector((store) => store);

    console.log(fidelityStore)

    const dispatch=useDispatch()
    const navigate=useNavigate()

  return (
    <div className="page page-fidility">
      <div className="page-fidility__top">
        <div className="page-fidility__top__left">
          <img src="/fidilityPage/topleft.svg" alt="" />
        </div>
        <div className="page-fidility__top__right" style={{gap:"1rem",letterSpacing:"2px"}}>
          <span>Souhaitez-vous utiliser</span>
          <span> votre solde ?</span>
        </div>
      </div>
      <div
        className="page-fidility__center"
        style={{
          marginBottom: "5rem",
          width: "50%",
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          justifyContent: "center",
          gap:"3rem"
        }}
      >
        <div style={{borderBottom:"1px solid grey",paddingBottom:"2rem",width:"100%",display:"flex",justifyContent:"space-between",fontSize:"2rem"}}>
            <span>Votre solde</span>
            <span>{fidelityStore.data.sold} $</span>
        </div>
        <div style={{borderBottom:"1px solid grey",paddingBottom:"2rem",width:"100%",display:"flex",justifyContent:"space-between",fontSize:"2rem"}}>
            <span>Total commande</span>
            <span>{productStore.list.reduce((prev,next)=>Number(prev)+Number(next.total),0)-promo} $</span>
        </div>
        <div style={{borderBottom:"1px solid grey",paddingBottom:"2rem",width:"100%",display:"flex",justifyContent:"space-between",fontSize:"2rem"}}>
            <span>Payer</span>
            <span>{productStore.list.reduce((prev,next)=>Number(prev)+Number(next.total),0)-promo-fidelityStore.data.sold<0?0:productStore.list.reduce((prev,next)=>Number(prev)+Number(next.total),0)-fidelityStore.data.sold} $</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "5rem" }}>
        <Link onClick={_=>{
          dispatch(fidelitySliceActions.use())
          navigate("/payment/methode")
        }}  >
          <img style={{width:"15rem"}} src="/oui.svg" alt="" />
        </Link>
        <Link
          onClick={_=>{
            dispatch(fidelitySliceActions.dontUse())
            navigate("/payment/methode")
          }}
        >
          <img style={{width:"15rem"}} src="/non.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default UseFidility;
