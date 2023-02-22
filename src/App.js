import React, { Component } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import TradingViewWidget from "./components/Tradingview/Tradingview";


function App() {
  return (
    <>
      <div className="row">
        <div className="col">
          <Accordion symbol="CME_MINI:MES1!|12M" />
        </div>
        <div className="col">
          <Accordion symbol={"NASDAQ:QQQ|12M"} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Accordion symbol={"HKEX:HSI1!|12M"} />
        </div>
        <div className="col">
          <Accordion symbol={"TVC:DXY|12M"} />
        </div>
        <div className="col">
          <Accordion symbol={"CME_MINI:M2K1!|12M"} />
        </div>

      </div>
    </>
  );
}

export default App;
