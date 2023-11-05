import React from "react";

const CountryForm = ({ countrysProp, setCountryHandler }) => {
  //mapeamos la prop y creamos un elemento option para cada country
  const mapData = countrysProp.map((country) => (
    <option key={country.code + 1} value={country.code}>
      {country.name}
    </option>
  ));

  const onChangeHandler = (e) => {
    setCountryHandler(e.target.value);
  };

  return (
    <>
      <select onChange={onChangeHandler} placeholder="Seleccione">
        {mapData}
      </select>
    </>
  );
};

export default CountryForm;
