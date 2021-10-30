import { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  //{...color} spreds te key value pairs in the object making them props (alpha={color.alpha})
  const colorList = list.map((color, index) => {
    return <SingleColor key={index} hex={color.hex} {...color} index={index} />;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color.length >= 3 && color.length <= 7 && color.includes("#")) {
      const colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="App">
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          {error ? (
            <p className="invalid-alert" role="alert">
              Incorrect value
            </p>
          ) : (
            ""
          )}
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={error ? "error" : ""}
          />
          <button className="btn">Generate</button>
        </form>
      </section>
      <section className="colors">{colorList}</section>
    </div>
  );
}

export default App;
