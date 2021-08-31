import React from "react";

export default function Main(props) {
  return (
    <div className="container">
      <h1 className="title">Covidshop</h1>
      <h2 className="subtitle">
        Товары для профилактики <br />и борьбы с Covid-19
      </h2>
      <button className="btn" onClick={props.onTrueClick}>
        Перейти к товарам
      </button>
    </div>
  );
}
