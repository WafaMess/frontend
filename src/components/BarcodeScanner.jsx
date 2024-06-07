// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useDebounce } from "@uidotdev/usehooks";
// import { useDispatch } from "react-redux";
// import { productSliceAction } from "../store/productSlice";

// const BarcodeScanner = () => {
//   const dispatchStore = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isSearching, setIsSearching] = useState(false);
//   const debouncedSearchTerm = useDebounce(searchTerm, 300);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     const handleScan = async () => {
//       if (debouncedSearchTerm === "") return;
//       setIsSearching(true);
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/codebare/${debouncedSearchTerm}`
//         );
//         if (response.data.status) {
//           const productData = response.data.product;
//           const formattedProduct = {
//             code: productData.codepr,
//             name: productData.nompr,
//             price: parseFloat(productData.prixl),
//             img: `http://localhost:3000/img/${productData.chemin_img}`,
//           };
//           dispatchStore(productSliceAction.addProduct(formattedProduct));
//         }
//         setSearchTerm(""); // Clear the input
//         setIsSearching(false);
//       } catch (err) {
//         console.error(err);
//         setIsSearching(false);
//       }
//     };
//     handleScan();
//   }, [debouncedSearchTerm, dispatchStore]);

//   return (
//     <div className="barcode-scanner">
//       <div>
//         <input
//           value={searchTerm}
//           onChange={handleChange}
//           disabled={isSearching}
//         />
//       </div>
//     </div>
//   );
// };

// export default BarcodeScanner;
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDebounce } from "@uidotdev/usehooks";
import { useDispatch } from "react-redux";
import { productSliceAction } from "../store/productSlice";

const BarcodeScanner = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const inputRef = useRef(null);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Effectuer la recherche/scanner ici
      axios
        .get(`http://localhost:3000/codebare/${debouncedSearchTerm}`)
        .then((response) => {
          if (response.data.status) {
            // Ajouter le produit scanné
            dispatch(
              productSliceAction.addProduct({
                code: response.data.product.codepr,
                name: response.data.product.nompr,
                price: parseFloat(response.data.product.prixl),
                img: `http://localhost:3000/img/${response.data.product.chemin_img}`,
              })
            );
          }
        })
        .catch((error) => console.error(error))
        .finally(() => {
          // Réinitialiser le champ de saisie et remettre le focus
          setSearchTerm("");
          inputRef.current.focus();
        });
    }
  }, [debouncedSearchTerm, dispatch]);

  // Réinitialiser le focus à chaque mise à jour du composant
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={searchTerm}
      onChange={handleChange}
      autoFocus
      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
    />
  );
};

export default BarcodeScanner;
