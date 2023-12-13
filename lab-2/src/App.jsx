import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const calculateSum = () => {
    const result = num1 + num2;
    setSum(result);
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <label>
        Enter number 1:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <br />
      <label>
        Enter number 2:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <br />
      <button onClick={calculateSum}>Calculate</button>
      <br />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;
