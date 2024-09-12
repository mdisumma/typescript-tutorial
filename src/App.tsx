import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Page1 from "./components/pages/Page1";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Navigation />
        <Page1 />
      </div>
    </div>
  );
}

export default App;
