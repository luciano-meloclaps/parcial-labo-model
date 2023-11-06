import React from "react";
import { useState } from "react";
import ProductForm from "./productForm/ProductForm";
import Cart from "./cart/cart";

const ContainerProducts = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    //  Operador de propagación
    setProducts([...products, product]);
  };

  const removeProduct = (index) => {
    // Filtramos una copia del estado sin el producto que queremos eliminar AFUERAA
    setProducts(products.filter((product, i) => i !== index));
  };
  return (
    <>
      <ProductForm addProduct={addProduct} />
      <Cart products={products} removeProduct={removeProduct} />
    </>
  );
};

export default ContainerProducts;
