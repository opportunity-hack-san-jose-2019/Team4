import React from "react";

import Header from "./components/Header";
import Incidents from "./components/Incidents";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <div id="page">
          <section className="section01">
            <Incidents />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
