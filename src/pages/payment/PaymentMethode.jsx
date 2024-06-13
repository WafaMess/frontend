import axios from "axios";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PaymentMethodeConfirm from "./PaymentMethodeConfirm";

const PaymentMethode = () => {
  const {
    productStore,
    fidelityStore: { isUsed, data },
    promoStore: promo,
  } = useSelector((store) => store);
  console.log(promo);
  console.log(productStore.list);

  const [continuePayment, setContinuePayment] = useState(false);

  const navigate = useNavigate();

  const fidelitySold = data.sold;
  const totalPrice = productStore.list
    .reduce((prev, current) => prev + Number(current.total), 0)
    .toFixed(2);
  const restToPay = isUsed
    ? totalPrice - fidelitySold - promo
    : totalPrice - promo;

  const orderHandler = async () => {
    try {
      const oderData = {
        total: totalPrice,
        products: {
          data: productStore.list.map((e) => {
            return {
              productName: e.name,
              price: e.price,
              quantity: e.quantity,
            };
          }),
        },
      };
      console.log(oderData);
      const addCommandeRequest = await axios.post(
        "http://localhost:3000/commande",
        oderData
      );
      console.log(addCommandeRequest.data);
      if (addCommandeRequest.data.status) {
        navigate("/payment/merci");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page page--payment-methode">
      <div className="page--payment-methode__top">
        <div>
          <span>Reste à payer</span>
          <span>{restToPay.toFixed(2) < 0 ? 0 : restToPay.toFixed(2)} DT</span>
        </div>
        <div>
          <span>Total commande</span>
          <span>{totalPrice} DT</span>
        </div>
      </div>
      {!continuePayment && (
        <>
          <div className="page--payment-methode__center">
            <span>Choisissez votre</span>
            <span>mode de paiement</span>
          </div>
          <ul className="page--payment-methode__list">
            <li onClick={setContinuePayment.bind(null, true)}>
              <img src="/payments/carteBancaire.svg" alt="" />
              <span>Carte bancaire</span>
            </li>
            <li onClick={setContinuePayment.bind(null, true)}>
              <img src="/payments/espece.svg" alt="" />
              <span>Espéces</span>
            </li>
            <li onClick={setContinuePayment.bind(null, true)}>
              <img src="/payments/autre.svg" alt="" />
              <span>Autre</span>
            </li>
          </ul>
          <div className="page--payment-methode__buttons">
            <button onClick={(_) => navigate(-1)}>Retour</button>
            <button onClick={(_) => window.location.reload()}>
              Abandonner
            </button>
            {/* <button onClick={setContinuePayment.bind(null ,true)}>Continuer ma commande</button> */}
          </div>
        </>
      )}
      {continuePayment && (
        <PaymentMethodeConfirm
          returnHandler={setContinuePayment.bind(null, false)}
          orderHandler={orderHandler}
        />
      )}
    </div>
  );
};

export default PaymentMethode;
