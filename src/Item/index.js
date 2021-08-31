import React, { useState } from "react";
import AddButton from "../AddButton";
import ButtonQuantity from "../ButtonQuantity";

export default function Item(props) {
  const [total, setTotal] = useState(0);
  const [see, setSee] = useState(false);
  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total <= 1) {
      setSee(false);
    } else {
      setTotal(total - 1);
    }
  }
  function handleAddClick() {
    setSee(true);
    setTotal(1);
  }

  return (
    <div>
      <div className="item">
        <img src={info.image} alt={info.name} className="item-img" />
        <div className="item-info">
          <h2>{info.name}</h2>
          <p>{info.desc}</p>
        </div>
        <div className="button-group">
          {!see ? (
            <AddButton see={see} onAddClick={handleAddClick} />
          ) : (
            <ButtonQuantity
              see={see}
              total={total}
              onMoreClick={handleMoreClick}
              onLessClick={handleLessClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
