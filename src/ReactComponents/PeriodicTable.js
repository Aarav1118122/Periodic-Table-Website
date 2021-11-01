import React from "react";
import Element from "./Element";
import data from "../PeriodicDetails";

export default function PeriodicTable() {
  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <Element
          key={element.number}
          elementName={element.name}
          elementSymbol={element.symbol}
          elementNumber={element.number}
          elementMass={Math.round(element.atomic_mass)}
          elementXpos={element.xpos}
          elementYpos={element.ypos}
          elementPhase={element.phase}
        />
      ))}
    </div>
  );
}
