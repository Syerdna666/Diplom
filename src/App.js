import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Travel from "./pages/Travel/Travel";
import Contacts from "./pages/Contacts/Contacts";
import Privacy from "./pages/Privacy_police/Privacy";
import Imprint from "./pages/Imprint/Imprint";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/privacy_police" element={<Privacy />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
