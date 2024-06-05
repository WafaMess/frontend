import React, { useState } from "react";
import NumberKeyboard from "../../components/NumberKeyboard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Portal from "../../components/Portal";
import Err from "../../components/modals/Err";

const Login = () => {
  const [codeAdmin, setCodeAdmin] = useState("");
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const loginRequest = await axios.post("http://localhost:3000/admin", {
        adminCode: codeAdmin,
      });
      if (loginRequest.data.status) {
        navigate("./general");
      } else {
        setErr(loginRequest.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="page page--admin-login">
      <NumberKeyboard
        text={"VOTRE CODE ADMIN"}
        setCodePromoHandler={setCodeAdmin}
      />
      <button onClick={loginHandler}>Connexion</button>

      {err && (
        <Portal>
          <Err err={err} onClose={setErr.bind(null, false)} />
        </Portal>
      )}
    </div>
  );
};

export default Login;
