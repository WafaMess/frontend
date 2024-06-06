import React, { useRef } from "react";
import ProductTable from "../../components/ProductTable";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";

const Imprimer = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const {
    productStore,
    fidelityStore: { isUsed, data },
    promoStore: promo,
  } = useSelector((store) => store);
  console.log(promo);
  console.log(productStore.list);

  const fidelitySold = data.sold;
  const totalPrice = productStore.list
    .reduce((prev, current) => prev + Number(current.total), 0)
    .toFixed(2);
  const restToPay = isUsed
    ? totalPrice - fidelitySold - promo
    : totalPrice - promo;
  return (
    <div>
      <div className="page page--payment-methode  " ref={componentRef}>
        {/* <div className="page--payment-methode__top"> */}
        <div>
          <span>Aures Group</span>
        </div>
        <div
          className="table-container"
          style={{ marginTop: "50px", marginLeft: "20px" }}
        >
          <ProductTable />
        </div>
        {/* //</div> */}

        <div className="page--payment-methode__center">
          <div>
            <span>Total payer :</span>
            <span>{restToPay.toFixed(2) < 0 ? 0 : restToPay.toFixed(2)} €</span>
          </div>
        </div>
      </div>
      <div className="page--payment-methode__buttons">
        <button
          type="button"
          className="btn btn-success"
          style={{ backgroundColor: "#4E4E4E", color: "white" }}
          onClick={handlePrint}
        >
          Imprimer
        </button>
      </div>
    </div>
  );
};

export default Imprimer;
