import react, { useState } from "react";
import "./App.css";

function App() {
  const [Hori, setHori] = useState(10);
  const [Veri, setVeri] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [color, setColor] = useState("black");

  return (
    <div className="App">
      <div className="controls">
        <label> Horizontal Length</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={Hori}
          onChange={(e) => setHori(e.target.value)}
        />

        <label>Vertical Length</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={Veri}
          onChange={(e) => setVeri(e.target.value)}
        />

        <label>Blur</label>
        <input
          type="range"
          min="-100"
          max="100"
          value={Blur}
          onChange={(e) => setBlur(e.target.value)}
        />

        <label>Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="output">
        <div
          className="box"
          style={{ boxShadow: `${Hori}px ${Veri}px ${Blur}px ${color}` }}
        >
          <p>
            boxShadow:{Hori}px
            {Veri}px {Blur}px {color}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
