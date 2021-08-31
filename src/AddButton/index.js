import React from "react";

export default function AddButton(props) {
  return (
    <button className="btn" onClick={props.onAddClick}>
      Добавить
    </button>
  );
}
