import React from "react";
import Buttons from "../buttons/Buttons";
import { useState } from "react";

const FormRunner = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
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
    </div>
  );
};

export default FormRunner;
