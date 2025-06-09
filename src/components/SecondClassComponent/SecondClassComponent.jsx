import React, { Component } from "react";
import SeconsFunctionComponent from "../SecondFunctionComponent/SeconsFunctionComponent";

class SecondClassComponent extends Component {
  render() {
    const { title, year } = this.props;

    return (
      <div>
        <h2>Klasna komponenta</h2>
        <p>Naslov: {title}</p>
        <p>Godina: {year}</p>

        <p>SeconsFunctionComponent kao djete</p>
        <SeconsFunctionComponent name="Slavko" city="Zagreb" />
      </div>
    );
  }
}

export default SecondClassComponent;
