import React from "react";
import plus from "./Plus.png";
import minus from "./Minus.png";

export default function ButtonGroup(props) {
  return (
    <div className="item-quantity">
      <button
        className="item-less"
        disabled={props.total === 0}
        onClick={props.onLessClick}
      >
        <img src={minus} />
      </button>
      <h3 className="item-total">{props.total ? props.total : ""}</h3>
      <button className="item-more" onClick={props.onMoreClick}>
        <img src={plus} />
      </button>
    </div>
  );
}
