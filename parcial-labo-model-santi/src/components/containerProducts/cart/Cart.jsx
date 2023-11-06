import React from "react";

const Cart = ({ products, removeProduct }) => {
  return (
    <>
      {/* Creo lista de elementos con productos, donde cada uno se puede eliminar al hacer clic en él. */}
      {products.map((product, index) => (
        <h3 key={index} onClick={() => removeProduct(index)}>
          {product}
        </h3>
      ))}
    </>
  );
};

export default Cart;
