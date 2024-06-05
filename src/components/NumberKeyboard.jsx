import { Backspace } from "@material-ui/icons";
import axios from "axios";
import React, { useState } from "react";

const NumberKeyboard = ({ setCodePromoHandler, text }) => {
  const [codePromo, setCodePromo] = useState("");

  const changeCodePromoHandler = (number) => {
    if (number === "clear") {
      setCodePromo("");
      setCodePromoHandler("");
    } else if (number === "delete") {
      setCodePromo((prev) => {
        const newCode = prev
          .split("")
          .splice(0, prev.split("").length - 1)
          .join("");
        setCodePromoHandler(newCode);
        return newCode;
      });
    } else {
      setCodePromo((prev) => {
        setCodePromoHandler(prev + number);
        return prev + number;
      });
    }
  };

  return (
    <div className="number-keyboard">
      <span style={{ textAlign: "center" }}>
        {codePromo.length != 0 ? codePromo : "NUMÉRO DU " + text.toUpperCase()}
      </span>
      <div className="number-keyboard__container">
        <div
          onClick={(_) => {
            changeCodePromoHandler(1);
          }}
          className="number-keyboard__container__item"
        >
          1
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler(2);
          }}
          className="number-keyboard__container__item"
        >
          2
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler(3);
          }}
          className="number-keyboard__container__item"
        >
          3
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler(4);
          }}
          className="number-keyboard__container__item"
        >
          4
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler(5);
          }}
          className="number-keyboard__container__item"
        >
          5
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler(6);
          }}
          className="number-keyboard__container__item"
        >
          6
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler(7);
          }}
          className="number-keyboard__container__item"
        >
          7
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler(8);
          }}
          className="number-keyboard__container__item"
        >
          8
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler(9);
          }}
          className="number-keyboard__container__item"
        >
          9
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler(0);
          }}
          className="number-keyboard__container__item"
        >
          0
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler("clear");
          }}
          className="number-keyboard__container__item"
        >
          C
        </div>
        <div
          onClick={(_) => {
            changeCodePromoHandler("delete");
          }}
          className="number-keyboard__container__item"
        >
          <Backspace />
        </div>
      </div>
    </div>
  );
};

export default NumberKeyboard;
