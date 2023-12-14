import React, { useState } from 'react';
import './Calculator.css';
import { FaCopy } from 'react-icons/fa6';
import { MdKeyboardBackspace } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa6';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputMode, setInputMode] = useState(true);

  const handleDelClick = () => {
    if (inputMode) {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const handleClrClick = () => {
    setDisplayValue('');
    setInputMode(true);
    setInputValue('');
  };

  const handleButtonClick = (value) => {
    if (!inputMode) {
      setInputMode(true);
      setInputValue('');
      if (!isNaN(parseInt(value))) {
        setDisplayValue(value);
      } else {
        setDisplayValue(displayValue + value);
      }
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleEvaluate = () => {
    try {
      const result = eval(displayValue);
      if (isNaN(result)) {
        setDisplayValue('Error');
      } else {
        setInputValue(displayValue);
        setDisplayValue(String(result));
        setInputMode(false);
      }
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleCopyResult = () => {
    navigator.clipboard.writeText(displayValue);
    alert('Result copied to clipboard!');
  };

  return (
    <div className="calculator">
      <div className='row'>
        <p style={{ color: 'black', textAlign: 'left' }}>
          {inputValue}
        </p>
        <p style={{ color: 'black', textAlign: 'right' }}>
          {inputMode ? 'INPUT' : 'RESULT'}
        </p>
      </div>
      <div className="row">
        <input
          type="text"
          value={displayValue}
          readOnly
          style={{ marginBottom: '10px' }}
        ></input>
      </div>
      <div className="row">
        <button
          type="button"
          value="Del"
          disabled={
            displayValue === '' ? true : false || !inputMode ? true : false
          }
          displayValue
          onClick={() => {
            handleDelClick();
          }}
        >
          <MdKeyboardBackspace />
        </button>
        <button
          type="button"
          disabled={displayValue === '' ? true : false}
          value="Clr"
          onClick={() => {
            handleClrClick();
          }}
        >
          <FaTrash />
        </button>
        <button type="button" onClick={handleCopyResult}>
          <FaCopy />
        </button>
        <input
          className="operator"
          type="button"
          value="/"
          onClick={() => {
            handleButtonClick('/');
          }}
        />
      </div>
      <div className="row">
        <input
          type="button"
          value="7"
          onClick={() => {
            handleButtonClick('7');
          }}
        />
        <input
          type="button"
          value="8"
          onClick={() => {
            handleButtonClick('8');
          }}
        />
        <input
          type="button"
          value="9"
          onClick={() => {
            handleButtonClick('9');
          }}
        />

        <input
          className="operator"
          type="button"
          value="*"
          onClick={() => {
            handleButtonClick('*');
          }}
        />
      </div>
      <div className="row">
        <input
          type="button"
          value="4"
          onClick={() => {
            handleButtonClick('4');
          }}
        />
        <input
          type="button"
          value="5"
          onClick={() => {
            handleButtonClick('5');
          }}
        />
        <input
          type="button"
          value="6"
          onClick={() => {
            handleButtonClick('6');
          }}
        />

        <input
          className="operator"
          type="button"
          value="-"
          onClick={() => {
            handleButtonClick('-');
          }}
        />
      </div>
      <div className="row">
        <input
          type="button"
          value="1"
          onClick={() => {
            handleButtonClick('1');
          }}
        />
        <input
          type="button"
          value="2"
          onClick={() => {
            handleButtonClick('2');
          }}
        />
        <input
          type="button"
          value="3"
          onClick={() => {
            handleButtonClick('3');
          }}
        />
        <input
          className="operator"
          type="button"
          value="+"
          onClick={() => {
            handleButtonClick('+');
          }}
        />
      </div>
      <div className="row">
        <input
          type="button"
          value="0"
          onClick={() => {
            handleButtonClick('0');
          }}
        />
        <input
          type="button"
          value="00"
          onClick={() => {
            handleButtonClick('00');
          }}
        />
        <input
          type="button"
          value="."
          onClick={() => {
            handleButtonClick('.');
          }}
        />
        <input
          className="operator"
          type="button"
          value="="
          onClick={handleEvaluate}
        />
      </div>
    </div>
  );
};

export default Calculator;
