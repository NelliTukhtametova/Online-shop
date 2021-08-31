import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import Main from "./Main";
import "./style.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return <Shop login={login} onFalseClick={() => setLogin(false)} />;
  } else {
    return <Main login={login} onTrueClick={() => setLogin(true)} />;
  }
}

render(<App />, document.querySelector("#root"));
