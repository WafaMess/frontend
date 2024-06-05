import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "@uidotdev/usehooks";
import { useDispatch } from "react-redux";
import { productSliceAction } from "../store/productSlice";
import ProductSliderItemm from "../components/ProductSliderItemm";

const BarcodeScanner = () => {
  const dispatchStore = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [product, setProduct] = useState(null); // État pour stocker les informations du produit scanné
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const handleScan = async () => {
      if (debouncedSearchTerm === "") return;
      setIsSearching(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/codebare/${debouncedSearchTerm}`
        );
        if (response.data.status) {
          const productData = response.data.product;
          dispatchStore(productSliceAction.addProduct(productData));
          setProduct(productData); // Mettre à jour l'état avec les informations du produit
        } else {
          setProduct(null); // Réinitialiser le produit si aucune donnée n'est trouvée
        }
        setIsSearching(false);
      } catch (err) {
        console.error(err);
        setIsSearching(false);
      }
    };
    handleScan();
  }, [debouncedSearchTerm, dispatchStore]);

  return (
    <div>
      <input
        onChange={handleChange}
        disabled={isSearching}
        style={{ zIndex: "99999" }}
      />
      {product && (
        <ProductSliderItemm
          product={product} // Passer le produit ici
        />
      )}{" "}
      {/* Afficher le produit scanné */}
    </div>
  );
};

export default BarcodeScanner;