import React from "react";
import "./Accordion.css";
import TradingViewWidget from "../Tradingview/Tradingview";


const Accordion = ({ symbol }) => {
  return (
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {symbol}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={{height: 400}}>
                <TradingViewWidget symbol={symbol} />
             
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
