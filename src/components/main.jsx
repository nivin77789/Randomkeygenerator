import React, { useState } from "react";
import "./main.css";
import im from "../images/im.png";
import Check from "./check";
import Webcam from "react-webcam";
import { useCallback, useRef } from "react";
import $ from "jquery";

function Main() {
  const [rangeValue, setRangeValue] = useState(25);

  // Function to handle range input changes
  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setRangeValue(newValue);
  };
  //image upload

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    $(".left-img").addClass("left-img-vis");
    $(".left-sub").addClass("left-sub-hid");
  }

  //webcam

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };
  return (
    <div>
      <div className="top">
        <h1>Random Key Generator</h1>
        <h4>Create strong and secure encryption key</h4>
      </div>
      <div className="bot">
        <div className="left">
          <div className="left-img">
            <img alt="img" src={file} />
          </div>
          <div className="left-sub">
            <h1>
              DRAG IMAGE HERE TO <br></br>GENERATE KEY
            </h1>

            <img src={im} alt="Logo" />
          </div>
        </div>
        <div className="right">
          <div className="right-sub">
            <div className="inp">
              <p>39tTGcpEZzU4cjc</p>
              <div className="btn2">Copy</div>
            </div>
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
            <Check />
            <div className="button">
              <input
                className="btn"
                type="file"
                placeholder="Pick Image to generate key"
                onChange={handleChange}
              />

              <h4>OR</h4>
              <div className="btn">Live Capture</div>
              <div className="container">
                {imgSrc ? (
                  <img src={imgSrc} alt="webcam" />
                ) : (
                  <Webcam height={600} width={600} ref={webcamRef} />
                )}
                <div className="btn-container">
                  {imgSrc ? (
                    <button onClick={retake}>Retake photo</button>
                  ) : (
                    <button onClick={capture}>Capture photo</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down"></div>
    </div>
  );
}

export default Main;
