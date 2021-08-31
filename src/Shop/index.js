import React, { useState, useEffect } from "react";
import Item from "../Item";
import useFetch from "./useFetch.js";

export default function Shop(props) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const { get, loader } = useFetch();

  useEffect(() => {
    get(" https://covid-shop-mcs.herokuapp.com/")
      .then((data) => setItems(data))
      .catch((error) => setError(error));
  }, [get]);

  const list = items.map((item) => <Item key={item.id} info={item} />);

  return (
    <div className="shop">
      <h1 className="title link" onClick={props.onFalseClick}>
        Covidshop
      </h1>
      <div className="catalog">{list}</div>
      {loader && !error && <h1 className="loader">Загружаем товары...</h1>}
      {error && <h1 className="loader">Ошибка 404 Not Found</h1>}
    </div>
  );
}
