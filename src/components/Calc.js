import React, { useState } from "react";

const Calc = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [holder, setHolder] = useState("");
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    return setShowModal(false);
  };
  const MyModal = () => {
    return (
      <div className="modal_wrapper" onClick={closeModal}>
        <div className="modal_container">
          <div>{isNaN(result) ? null : <h3>Your BMI = {result}</h3>}</div>
          <p>{holder}</p>
          <button className="closeBtn" onClick={closeModal}>
            x
          </button>
        </div>
      </div>
    );
  };

  const changeHeightHandler = (event) => {
    setHeight(event.target.value);
  };
  const changeWeightHandler = (event) => {
    setWeight(event.target.value);
    console.log("hello");
  };

  const clickHandler = () => {
    setShowModal(true);
    let bmivalue = Math.trunc(weight / (height / 100) ** 2);
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
    <div className="top_grid">
      return (<>{showModal && <MyModal closeModal={closeModal} />}</>
      );
      <div className="calculator_grid">
        <h1>BMI Calculator</h1>
        <div
          className="
        "
        >
          <div className="input_bar">
            <label htmlFor="text">Weight (Kg): </label>
            <input
              value={weight}
              onChange={changeWeightHandler}
              type="text"
              placeholder="Enter your Weight"
            />
          </div>
          <div className="input_bar">
            <label htmlFor="text"> Height (cm): </label>
            <input
              value={height}
              onChange={changeHeightHandler}
              type="text"
              placeholder="Enter your Height"
            />
          </div>
        </div>
        <div className="btn">
          <button onClick={clickHandler}>Calculate</button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
