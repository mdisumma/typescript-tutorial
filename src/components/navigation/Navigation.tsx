import { useState } from "react";

export default function Navigation() {
  const [state, setState] = useState(true);

  function handleClick() {
    setState(!state);
  }
  return (
    <nav className={state ? "navigation-open" : "navigation-close"}>
      <button onClick={handleClick} className="menu">
        {state ? "menu <<" : "menu >>"}
      </button>
      <ul>
        <li>Compatibility with JavaScript</li>
        <li>Static Typing</li>
        <li>Type Inference</li>
        <li>Optional and Default Parameters</li>
        <li>Interfaces</li>
        <li>Enum Types</li>
        <li>Generics</li>
        <li>Modules and Namespaces</li>
        <li>Advanced Object-Oriented Features</li>
        <li>Enhanced IDE Support</li>
      </ul>
    </nav>
  );
}
