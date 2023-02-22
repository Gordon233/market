// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({symbol}) {
  const contariner = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "${symbol}",
              "${symbol}"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "100%",
          "locale": "zh_TW",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": true,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Logarithmic",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "candlesticks",
          "upColor": "#22ab94",
          "downColor": "#f7525f",
          "borderUpColor": "#22ab94",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#22ab94",
          "wickDownColor": "#f7525f"
        }`;
      contariner.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={contariner}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://tw.tradingview.com/symbols/NASDAQ-QQQ/" rel="noopener" target="_blank"><span className="blue-text">QQQ行情</span></a>由TradingView提供</div>
    </div>
  );
}

export default memo(TradingViewWidget);
