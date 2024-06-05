import React from "react";

// component
import ProductTableRows from "./ProductTableRows";
import { useSelector } from "react-redux";

const ProductTable = ({
  selectedProductCodeToDelete,
  setSelectedProductCodeToDeleteHander,
}) => {
  const { list: productList } = useSelector((store) => store.productStore);

  return (
    <div
      className="table-container"
      style={{ marginTop: "50px", marginLeft: "20px" }}
    >
      <table>
        <thead>
          <tr>
            <th style={{ fontSize: "30px", textAlign: "center" }}>
              Désignation
            </th>
            <th style={{ fontSize: "20px", textAlign: "center" }}>Prix</th>
            <th style={{ fontSize: "20px", textAlign: "center" }}>Qté</th>
            <th style={{ fontSize: "20px", textAlign: "center" }}>Montant</th>
          </tr>
        </thead>
        <tbody>
          {productList.length === 0 ? (
            <div></div>
          ) : (
            productList.map((e) => {
              return (
                <ProductTableRows
                  selectedProductCodeToDelete={selectedProductCodeToDelete}
                  setSelectedProductCodeToDeleteHander={
                    setSelectedProductCodeToDeleteHander
                  }
                  key={e.code}
                  img={e.img}
                  code={e.code}
                  name={e.name}
                  price={e.price}
                  quantity={e.quantity}
                  total={e.total}
                />
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
