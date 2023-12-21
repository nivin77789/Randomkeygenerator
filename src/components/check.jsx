import React from "react";
import "./check.css";

function Check() {
  return (
    <div>
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
    </div>
  );
}

export default Check;
