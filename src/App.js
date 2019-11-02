import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import charity from "./images/charity.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="page">
        <section className="section01">
          <h2>
            Help the world,
            <br /> HelPal
          </h2>
          <img src={charity} alt="Charity Icon" />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
