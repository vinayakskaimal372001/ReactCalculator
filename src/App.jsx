import React, { useState } from 'react';
import './App.css';

function App() {
  // Using state to manage the input value
  const [result, setResult] = useState('');

  // Function to display content
  const displayContent = (content) => {
    setResult((prev) => prev + content);
  };

  // Function to clear the screen
  const clearCalScreen = () => {
    setResult('');
  };

  // Function to evaluate the result
  const displayResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  // Function to remove the last digit
  const removeLastDigit = () => {
    setResult((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <div id="calculator">
        <div className="top">
          <button onClick={clearCalScreen} id="clear">AC</button>
          <input id="result" className="screen" value={result} readOnly />
        </div>

        <div className="keys">
          <button onClick={() => displayContent('7')} id="seven">7</button>
          <button onClick={() => displayContent('8')} id="eight">8</button>
          <button onClick={() => displayContent('9')} id="nine">9</button>
          <button onClick={() => displayContent('+')} id="add" className="operator">+</button>
          <button onClick={() => displayContent('4')} id="four">4</button>
          <button onClick={() => displayContent('5')} id="five">5</button>
          <button onClick={() => displayContent('6')} id="six">6</button>
          <button onClick={() => displayContent('-')} id="sub" className="operator">-</button>
          <button onClick={() => displayContent('1')} id="one">1</button>
          <button onClick={() => displayContent('2')} id="two">2</button>
          <button onClick={() => displayContent('3')} id="three">3</button>
          <button onClick={() => displayContent('/')} id="div" className="operator">÷</button>
          <button onClick={() => displayContent('0')} id="zero">0</button>
          <button onClick={() => displayContent('.')} id="dot">.</button>
          <button onClick={displayResult} id="equal" className="eval">=</button>
          <button onClick={() => displayContent('*')} id="multi" className="operator">x</button>
          <button onClick={removeLastDigit} id="del" className="operator">DEL</button>
        </div>
      </div>
    </>
  );
}

export default App;
