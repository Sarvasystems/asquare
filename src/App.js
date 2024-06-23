import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
