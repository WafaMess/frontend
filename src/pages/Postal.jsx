import React, { useState } from "react";
import { useSelector } from "react-redux";
import NumberKeyboard from "../components/NumberKeyboard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { createPortal } from "react-dom";
import Portal from "../components/Portal";
import Err from "../components/modals/Err";

const Postal = () => {


  const {
    productStore,
    fidelityStore,
    promoStore: promo,
  } = useSelector((store) => store);

  const navigate=useNavigate()

  const [codePostal, setCodePostal]=useState("")
  const [err, setErr]=useState(false)


  const setCodePostalHandler=(code)=>{
    setCodePostal(code)
  }

  const addCodePostalHandler= async (e)=>{
    try {
        e.preventDefault()
        if(codePostal.length>3){
            const addCodePostalRequest= await axios.post("http://localhost:3000/postal_code",{codePostal})
            if(addCodePostalRequest.data.status){
                navigate("/payment/methode")
            }
        }else{
            setErr(true)
        }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="page page-fidility">
        <div style={{fontSize:"3rem",textAlign:"center",fontWeight:"bolder",marginBlock:"4rem"}}>Veuillez saisir votre code postal</div>
      <div
        className="page-fidility__center"
        style={{
          marginBottom: "5rem",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NumberKeyboard
          text={"code postal"}
          setCodePromoHandler={setCodePostalHandler}
        />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/payment/methode" className="page-fidility__bottom">
          Ignorer
        </Link>

        <Link
          onClick={addCodePostalHandler}
          style={{ backgroundColor: "#4E4E4E", color: "white" }}
          className="page-fidility__bottom"
          to="/payment/methode"
        >
          Confirmer
        </Link>
      </div>
      {err&&createPortal(<Portal>
        <Err err={"Votre compte est invalide !"}  onClose={setErr.bind(null, false)}/>
      </Portal>,
        document.querySelector("#portals")
      )}    
    </div>
  );
};

export default Postal;
