import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const PrintButton = () => {
  const {
    productStore,
    fidelityStore: { isUsed, data },
    promoStore: promo,
  } = useSelector((store) => store);

  const handlePrint = async () => {
    const fidelitySold = data.sold;
    const totalPrice = productStore.list
      .reduce((prev, current) => prev + Number(current.total), 0)
      .toFixed(2);
    const restToPay = isUsed
      ? totalPrice - fidelitySold - promo
      : totalPrice - promo;

    const commande = {
      id: new Date().getTime(), // ID unique pour chaque commande
      dateCommande: new Date().toLocaleString(),
      bornID: "Caisse 1", // Id de la caisse, exemple
      client_id: "Client 123", // Id du client, exemple
      Products: productStore.list.map((product) => ({
        name: product.name,
        qte: product.qte,
        totalPriceProd: product.total,
      })),
      totalPrice: restToPay.toFixed(2),
    };

    try {
      await axios.post("http://votre-serveur/print", commande);
      alert("Impression réussie!");
    } catch (error) {
      console.error("Erreur d'impression:", error);
      alert("Erreur d'impression");
    }
  };

  return <button onClick={handlePrint}>Imprimer le ticket</button>;
};

export default PrintButton;
