import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Create from "./Components/Create";
import All from "./Components/All";
import Update from "./Components/Update";
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>  
          <Route exact path = "/Create" element = {<Create />} />
          <Route exact path = "/all" element = {<All />} />
          <Route exact path = "/Update/:id" element = {<Update  />} />

        
        </Routes>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> 
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
