
import React, { Component, useState } from "react";
import "../styles/App.css";

const messageArr = [
  "Siblings",
  "Friends",
  "Love",
  "Affection",
  "Marriage",
  "Enemy",
];

const removeMatchedChar = (str1, str2) => {
    let newStr1 = str1;
    let newStr2 = str2;
  
    const maxLength = Math.min(str1.length, str2.length);
  
    for (let i = 0; i < maxLength; i++) {
      const ch1 = str1[i];
      const ch2 = str2[i];
      if (newStr1.includes(ch1) && newStr2.includes(ch1)) {
        newStr1 = newStr1.replace(ch1, "");
        newStr2 = newStr2.replace(ch1, "");
      }
    }
  
    return [newStr1, newStr2];
  };

function App() {
    const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [message, setMessage] = useState("");


  function firstName  (e){
    setInput1(e.target.value)

    
  }

  function SecondName  (e){
    setInput2(e.target.value)
  }


  const handleCalculate = () => {
    
    if (input1 === "" || input2 === "")
      return setMessage("Please Enter valid input");
    let [str1, str2] = removeMatchedChar(input1, input2);
   
    const msgNumber = (str1.length + str2.length) % 6;
    setMessage(messageArr[msgNumber]); // getting msg based on number
  };

  const handleClear = () => {
    setMessage("");
    setInput1 (" ");
    setInput2 (" ");
  };

  return (
    <div id="main">
      <input name="name1" data-testid="input1"  type="text" onChange={(e)=>{firstName(e)}}/>
      <input name="name2" data-testid="input2" type="text" onChange={(e)=>{SecondName(e)}} />
      <button data-testid="calculate_relationship" onClick={handleCalculate}>
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{message}</h3>
    </div>
  );
}

export default App;