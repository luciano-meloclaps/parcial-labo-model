import React from "react";
import { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [value, setValue] = useState("");

  //Fn manejar el cambio del input
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Send Form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Si el valor no está vacío => Fn addProduct
    if (value) {
      addProduct(value);
      setValue("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Ingresar nuevo producto a la lista</label>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};

export default ProductForm;
