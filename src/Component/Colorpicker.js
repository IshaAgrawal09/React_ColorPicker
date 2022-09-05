import React, { useState } from "react";

export default function Colorpicker() {
 
  const [sampleColor, setsampleColor] = useState("");
 
  var colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#808080",
    "#1CFF00",
    "#FF5B00",
    "#8500FF",
    "#00FFFF",
    "#254747",
  ];

  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [blue, setBlue] = useState();

  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");
  // COLOR PICKER FUNC
  var pickColor = (e) => {
    var color = e.target.style.backgroundColor;
    color = color.slice(4, color.length - 1);
    var splitArr = color.split(",");
    navigator.clipboard.writeText(color.value);
    setsampleColor(
      rgbToHex(Number(splitArr[0]), Number(splitArr[1]), Number(splitArr[2]))
    );
  };
  // RESET FUNC
  var reset = () => {
    window.location.reload();
  };
  // SHOWS VALUES IN RGB FORM
  var ShowColor = () => {
    setsampleColor(rgbToHex(Number(red), Number(green), Number(blue)));
  };

  return (
    <>
      <div className="mainApp">
        <h1 id="mainHead">Color Picker App</h1>
        <div className="section">
          {/* CHILD 1  */}
          <div className="Child1">
            <div className="sampleColors">
              <h2>Color Palette</h2>
              <div className="mainDiv">
                {colorArray.map((item, index) => (
                  <>
                    <div
                      className="mainItem"
                      style={{ backgroundColor: item }}
                      onClick={(event) => pickColor(event)}
                    ></div>
                  </>
                ))}
              </div>
            </div>
          </div>
          {/* CHILD 2  */}
          <div className="Child2">
            <div id="colorDisplay" style={{ backgroundColor: sampleColor }}>
              <h2>Try Here.. &nbsp;&nbsp;{sampleColor}</h2>
            </div>
            {/* ENTER VALUES  */}
            <div className="enterValueMain">
              <h2>Enter the Color</h2>

              <div className="enterValue">
                <input
                  type="number"
                  placeholder="###"
                  className="inputColor"
                  onChange={(event) => setRed(event.target.value)}
                />
                <input
                  type="number"
                  placeholder="###"
                  className="inputColor"
                  onChange={(event) => setGreen(event.target.value)}
                />
                <input
                  type="number"
                  placeholder="###"
                  className="inputColor"
                  onChange={(event) => setBlue(event.target.value)}
                />
              </div>
              <div className="btnMain">
                <button className="btn" onClick={ShowColor}>
                  Show Color <i className="fa-solid fa-eye"></i>
                </button>
                <button className="btn" onClick={reset}>
                  Reset <i className="fa-solid fa-rotate-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
