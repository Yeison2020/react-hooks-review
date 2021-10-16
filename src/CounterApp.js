import PropTypes from "prop-types";
import { useState } from "react";
// Note I needed to add this default value to make my test pass Learn why ?

function CounterApp({ value = 10 }) {
  const [counter, setCounter] = useState(value);

  // Handle Functions
  const handleAdd = () => {
    // When you dont no know the name of the counter
    // No need to return;
    setCounter((c) => c + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleReduce = () => {
    setCounter(counter - 1);
  };

  //-------------Returns
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleReduce}>-1</button>
    </div>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
