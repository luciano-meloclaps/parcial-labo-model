import React from "react";
import Buttons from "../buttons/Buttons";
import { useState } from "react";

const FormRunner = () => {
  const [count, setCount] = useState(0);

  //Validacion: usamos el count para el valor del input
  const errorMessage = (count) => {
    if (count > 7 || count < 1) {
      return <p style={{ color: "red" }}>¡La semana solo tiene 7 días!</p>;
    } else {
      return null;
    }
  };

  return (
    <div>
      {" "}
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <label htmlFor="floatingInput">Dias para correr:</label>
      </div>
      <Buttons
        text="+"
        color="green"
        margin="20px"
        count={count}
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <Buttons
        text="-"
        color="red"
        margin="20px"
        count={count}
        onClick={() => {
          setCount(count - 1);
        }}
      />
      {errorMessage(count)}
    </div>
  );
};

export default FormRunner;
