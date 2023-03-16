import { get } from "jquery";
import React, { useState } from "react";

const Calc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [holder, setHolder] = useState("");

  const changeHeightHandler = (event) => {
    setHeight(event.target.value);
  };
  const changeWeightHandler = (event) => {
    setWeight(event.target.value);
    console.log("hello");
  };

  const clickHandler = () => {
    let bmivalue = weight / (height / 100) ** 2;
    setResult(bmivalue);
    let holder = getBmi(bmivalue);
    setHolder(holder);
  };

  const getBmi = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight- you need to eat more";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight- you got standard health";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight-you need to train";
    }
    if (bmi >= 30) {
      return "Obesity-- you are UNFIT";
    }
  };

  return (
    <>
      <div className="cacl-grid">
        <h1>BMI Calculator</h1>
        <div className="input-box">
          <input
            value={weight}
            onChange={changeWeightHandler}
            type="text"
            placeholder="enter your weight"
          />
          <input
            value={height}
            type="text"
            placeholder="enter your height"
            onChange={changeHeightHandler}
          />
        </div>
        <button onClick={clickHandler} className="btn">
          Calculate
        </button>
        <div className="output-grid">{result}</div>
        <div>{isNaN(result) ? null : <h3>Your BMI = {result}</h3>}</div>
        <div className="row">
          <h3>{holder}</h3>
        </div>
      </div>
    </>
  );
};

export default Calc;
