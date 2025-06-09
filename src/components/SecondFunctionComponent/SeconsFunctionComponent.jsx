import React from "react";

function SeconsFunctionComponent({ name, city }) {
  return (
    <div>
      <h3>Funkcijska komponenta</h3>
      <p>Ime: {name}</p>
      <p>Grad: {city}</p>
    </div>
  );
}

export default SeconsFunctionComponent;
