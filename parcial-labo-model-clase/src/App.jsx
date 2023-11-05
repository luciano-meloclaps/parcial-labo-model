import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import CountryForm from "./components/countryForm/CountryForm";

function App() {
  const data = [
    { code: "ARG", name: "Argentina", population: 45810000 },
    { code: "FRA", name: "Francia", population: 67750000 },
    { code: "GER", name: "Alemania", population: 83200000 },
  ];

  const [optionSelect, setOptionSelect] = useState(null);

  const setCountryHandler = (value) => {
    setOptionSelect(value);
  };

  const objetoFilterCountry = data.filter(
    (country) => country.code == optionSelect
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Parcial</h1>'{/* Pasamos las props*/}
      <CountryForm countrysProp={data} setCountryHandler={setCountryHandler} />
      {/* Ssi el array objetoFilterCountry tiene algún elemento (evitamos el UNDEFINED)*/}
      {objetoFilterCountry.length > 0 ? (
        <p>
          EL PAIS: {objetoFilterCountry[0].name} posee habilitantes:{" "}
          {objetoFilterCountry[0].population}
        </p>
      ) : (
        // Else
        <p>No se encontró el país</p>
      )}
    </>
  );
}

export default App;
