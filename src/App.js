import React from "react";
import "./App.scss";
import drawer from "./images/drawers.jpg";
import { Text } from "./component/Index";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <img className="img-drawer" src={drawer} alt="Drawer" />
        </div>
        <Text />
      </div>
    </div>
  );
};

export default App;
