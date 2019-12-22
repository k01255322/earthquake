import React from "react";
import "./App.css";
import Get from "./components/Get";
import GoogleMap from "./components/GoogleMap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Get />
      </header>
    </div>
  );
}

export default App;
