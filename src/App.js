import { useState, useEffect, useRef } from "react";
import CalBody from "./component/operands/operands.component ";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const operand = ["/", "*", "-", "+"];
    const eValue = e.target.value;
    //check the last character of the result
    const chart = result.toString();
    const lastChar = chart.slice(-1);

    const clear = () => {
      return setResult(chart.slice(0, -1));
    };

    const calculate = () => {
      const eva = (eval(result) || "") + "";
      const finalResult = Math.round(eva * 100) / 100;
      return setResult(finalResult);
    };

    if (eValue === "=") {
      try {
        calculate();
      } catch (error) {}
    } else if (eValue === "DEL") {
      return clear();
    } else if (
      operand.includes(eValue) &&
      (result === "" || operand.includes(lastChar))
    ) {
    } else {
      setResult(result + eValue);
    }
  };


  const handleChange = (event) => {
     if (
      typeof +event.target.value === "number" &&
      !Number.isNaN(+event.target.value)
    ) {
      setResult(event.target.value);
    }
  };
  return (
    <div className="App">
      <h2>Calculator</h2>
      <main className="calculater-container">
        <input
          type="text"
          value={result}
          onChange={handleChange}
          className="left-align-input"
        />
        <CalBody handleClick={handleClick} />
      </main>
    </div>
  );
};

export default App;
