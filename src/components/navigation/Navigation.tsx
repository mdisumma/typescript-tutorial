import { useState } from "react";

export default function Navigation(props: any) {
  const [state, setState] = useState(true);

  function handleClick() {
    setState(!state);
  }
  return (
    <>
      <button onClick={handleClick} className="menu">
        {state ? "menu <<" : "menu >>"}
      </button>
      <nav className={`navigation ${state ? "open" : "close"}`}>
        <ul onClick={props.onClick}>
          <li id="component1">How to start</li>
          <li id="component2">Compatibility with JavaScript</li>
          <li id="component3">Static Typing</li>
          <li id="component4">Type Inference</li>
          <li id="component5">Optional and Default Parameters</li>
          <li id="component6">Interfaces</li>
          <li id="component7">Enum Types</li>
          <li id="component8">Generics</li>
        </ul>
      </nav>
    </>
  );
}
