import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Routing from "./components/Routing/Routing";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="mailbox">
        <Routing />
      </div>
    </div>
  );
};

export default App;
