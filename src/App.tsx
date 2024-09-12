import { useState } from "react";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Component1 from "./components/body/Component1";
import Component2 from "./components/body/Component2";
import Component3 from "./components/body/Component3";
import Component4 from "./components/body/Component4";
import Component5 from "./components/body/Component5";
import Component6 from "./components/body/Component6";
import Component7 from "./components/body/Component7";
import Component8 from "./components/body/Component8";
import "./App.css";

function App() {
  const [navValue, setNavValue] = useState("");

  function navHandler(e) {
    setNavValue(e.target.id);
  }
  return (
    <div>
      <Header />
      <div className="container">
        <Navigation onClick={navHandler} />
        {navValue === "component1" && <Component1 />}
        {navValue === "component2" && <Component2 />}
        {navValue === "component3" && <Component3 />}
        {navValue === "component4" && <Component4 />}
        {navValue === "component5" && <Component5 />}
        {navValue === "component6" && <Component6 />}
        {navValue === "component7" && <Component7 />}
        {navValue === "component8" && <Component8 />}
      </div>
    </div>
  );
}

export default App;
