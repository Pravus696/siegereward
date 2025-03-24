import React from "react";
//  { useState } from 'react';
import Header from "./components/header";
// import guild from './components/guild';
import "./App.css";
import Calculator from "./components/calculator";

const App = () => {
  return (
    <>
      <Header />
      <Calculator />

      <footer id="footer">
        <p>
          This page was created by Pravus. It is not affiliated with the
          official game in any way.
        </p>
      </footer>
    </>
  );
};

export default App;
