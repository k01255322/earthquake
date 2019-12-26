import React from "react";
import "./App.css";
import Get from "./components/Get";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Get />
      </header>
      <Footer />
    </div>
  );
}

export default App;
