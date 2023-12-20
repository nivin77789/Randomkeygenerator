import React, { useState } from "react";
import "./main.css";
import im from "../images/im.png";

function Main() {
  const [rangeValue, setRangeValue] = useState(25);

  // Function to handle range input changes
  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setRangeValue(newValue);
  };

  return (
    <div>
      <div className="top">
        <h1>Random Key Generator</h1>
        <h4>Create strong and secure encryption key</h4>
      </div>
      <div className="bot">
        <div className="left">
          <h1>
            DRAG IMAGE HERE TO <br></br>GENERATE KEY
          </h1>

          <img src={im} alt="Logo" />
        </div>
        <div className="right">
          <div className="keylen">
            <p>KeyLength:</p>
            <div className="range">
              <input
                type="range"
                value={rangeValue}
                min="10"
                max="50"
                onChange={handleRangeChange}
              />
              <p id="rangeValue">{rangeValue}</p>
            </div>
          </div>
          <div className="check">
            <p>Charecters Used:</p>
            <div class="checkbox-wrapper-46">
              <input class="inp-cbx" id="cbx-46" type="checkbox" />
              <label class="cbx" for="cbx-46">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>ABC</span>
              </label>
            </div>
            <div class="checkbox-wrapper-46">
              <input class="inp-cbx" id="cbx-46" type="checkbox" />
              <label class="cbx" for="cbx-46">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>abc</span>
              </label>
            </div>
            <div class="checkbox-wrapper-46">
              <input class="inp-cbx" id="cbx-46" type="checkbox" />
              <label class="cbx" for="cbx-46">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>123</span>
              </label>
            </div>
            <div class="checkbox-wrapper-46">
              <input class="inp-cbx" id="cbx-46" type="checkbox" />
              <label class="cbx" for="cbx-46">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>#$&</span>
              </label>
            </div>
          </div>
          <div className="button">
            <div className="btn">PICK IMAGE TO GENERATE KEY</div>
            <h4>OR</h4>
            <div className="btn">Live Capture</div>
          </div>
        </div>
      </div>
      <div className="down"></div>
    </div>
  );
}

export default Main;
