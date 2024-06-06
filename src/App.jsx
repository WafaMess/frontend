import React, { useState } from "react";

// style
import "./style/style.css";

// react router dom

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// layout

//pages
import MainPage from "./pages/MainPage";
import CodePromo from "./pages/CodePromo";
import SearchProduct from "./pages/SearchProduct";
import Fidility from "./pages/Fidility";
import FidilityCart from "./pages/FidilityCart";
import FidilityCartManual from "./pages/FidilityCartManual";
import UseFidility from "./pages/UseFidility";
import AccessFidility from "./pages/AccessFidility";
import Postal from "./pages/Postal";
import PaymentMethode from "./pages/payment/PaymentMethode";
import PaymentMerci from "./pages/payment/PaymentMerci";
import Home from "./pages/Home";
import Login from "./pages/admin/Login";
import General from "./pages/admin/General";
import Options from "./pages/admin/Options";
import Imprimente from "./pages/admin/Imprimente";
import Design from "./pages/admin/Design";
import Layouts from "./components/Layouts";
import AdminLayOuts from "./pages/admin/AdminLayOuts";
import FidilityCin from "./pages/FidilityCin";
import FidilityCinManual from "./pages/FidilityCinManual";
import Imprimer from "./pages/payment/Imprimer";

const App = () => {
  const [promoDetails, setPromoDetails] = useState(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layouts />}>
          <Route index element={<MainPage promoDetails={promoDetails} />} />
          <Route path="/rechercher_article" element={<SearchProduct />} />

          <Route
            path="/code_promo"
            element={<CodePromo setPromoDetails={setPromoDetails} />}
          />
          <Route path="/fidelite">
            <Route index element={<AccessFidility />} />
            <Route path="access" element={<Fidility />} />
            <Route path="carte" element={<FidilityCart />} />
            <Route path="carte/manual" element={<FidilityCartManual />} />
            <Route path="cin" element={<FidilityCin />} />
            <Route path="cin/manual" element={<FidilityCinManual />} />
            <Route path="use" element={<UseFidility />} />
          </Route>
          <Route path="/postal" element={<Postal />} />
          <Route path="/imprimer" element={<Imprimer />} />

          <Route path="/payment/methode" element={<PaymentMethode />} />
          <Route path="/payment/merci" element={<PaymentMerci />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminLayOuts />}>
          <Route index element={<Login />} />
          <Route path="general" element={<General />} />
          <Route path="options" element={<Options />} />
          <Route path="imprimente" element={<Imprimente />} />
          <Route path="design" element={<Design />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
