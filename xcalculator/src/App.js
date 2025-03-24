import { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const appendInput = (value) => {
    if (value === '=') {
      evaluateExpression();
    } else {
      setInput((prev) => prev + value);
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const evaluateExpression = () => {
    try {
      if (!input) {
        setResult('Error');
        return;
      }

      // Handle specific edge cases
      if (input.includes('/0/0') || input === '0/0') {
        setResult('NaN');
        return;
      }

      if (/\/0(?!\.)/.test(input)) {
        setResult('Infinity');
      } else {
        const evaluated = eval(input);
        setResult(evaluated);
        setInput(evaluated.toString());
      }

    } catch (e) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="input-display" />
      <div className="buttons">
        <button onClick={clearInput} className="btn clear">C</button>
        <button onClick={() => appendInput('/')} className="btn operator">/</button>
        <button onClick={() => appendInput('*')} className="btn operator">*</button>
        <button onClick={() => appendInput('-')} className="btn operator">-</button>

        <button onClick={() => appendInput('7')} className="btn">7</button>
        <button onClick={() => appendInput('8')} className="btn">8</button>
        <button onClick={() => appendInput('9')} className="btn">9</button>
        <button onClick={() => appendInput('+')} className="btn operator">+</button>

        <button onClick={() => appendInput('4')} className="btn">4</button>
        <button onClick={() => appendInput('5')} className="btn">5</button>
        <button onClick={() => appendInput('6')} className="btn">6</button>
        <button onClick={() => appendInput('=')} className="btn equals">=</button>

        <button onClick={() => appendInput('1')} className="btn">1</button>
        <button onClick={() => appendInput('2')} className="btn">2</button>
        <button onClick={() => appendInput('3')} className="btn">3</button>

        <button onClick={() => appendInput('0')} className="btn zero">0</button>
        <button onClick={() => appendInput('.')} className="btn">.</button>
      </div>
      <div id="result" className="result-display">{result}</div>
    </div>
  );
}

export default Calculator;