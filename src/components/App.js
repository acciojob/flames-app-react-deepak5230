import React, { useState } from 'react';
import './App.css';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    if (name1.trim() === '' || name2.trim() === '') {
      setResult('Please Enter valid input');
      return;
    }

    let tempName1 = name1;
    let tempName2 = name2;

    // Remove common characters
    for (let char of name1) {
      if (tempName2.includes(char)) {
        tempName1 = tempName1.replace(char, '');
        tempName2 = tempName2.replace(char, '');
      }
    }

    const count = (tempName1 + tempName2).length;
    const remainder = count % 6;

    const flames = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];
    setResult(flames[remainder]);
  };

  const clearInputs = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div className="App">
      <h1>FLAMES Game</h1>
      <input
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        data-testid="input1"
        placeholder="Enter first name"
      />
      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        data-testid="input2"
        placeholder="Enter second name"
      />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship
      </button>
      <button onClick={clearInputs} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
