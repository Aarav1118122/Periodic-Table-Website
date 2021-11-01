import React from "react";
import data from "../PeriodicDetails";

export default function Element({ elementNumber }) {
  const element = data.elements[elementNumber - 1];
  return (
    <>
      <div
        className={`element ${element.name} ${element.phase} ${element.Block}`}
        style={{
          gridRow: element.ypos,
          gridColumn: element.xpos,
        }}
      >
        <div className="element__number">{element.number}</div>
        <div className="element__symbol">{element.symbol}</div>
        <div className="element__name">{element.name}</div>
        <div className="element__mass">{element.atomic_mass.toFixed(1)}</div>
      </div>
    </>
  );
}
