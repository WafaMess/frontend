import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
//import { useReactToPrint } from "react-to-print";

const PaymentMethodeConfirm = ({ returnHandler, orderHandler }) => {
  const navigate = useNavigate();
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  const handleClick = () => {};
  return (
    <>
      {/* //<div className="page--payment-methode__top" ref={componentRef}></div> */}

      <div className="page--payment-methode__center">
        <span>Suivez les indications</span>
        <span>du lecteur de carte bancaire</span>
      </div>
      <div className="page--payment-methode__list">
        <img src="/payments/carteBancaire.svg" alt="" />
      </div>
      <div className="page--payment-methode__buttons">
        <button onClick={returnHandler}>Retour</button>
        <button
          onClick={orderHandler}
          style={{ backgroundColor: "#4E4E4E", color: "white" }}
        >
          Payer
        </button>

        {/* <button type="button" className="btn btn-success" onClick={handleClick}>
          Imprimer
        </button> */}
      </div>
    </>
  );
};

export default PaymentMethodeConfirm;
