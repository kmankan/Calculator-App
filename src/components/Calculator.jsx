import { useState, useEffect } from "react"
import Display from "./Display"
import Keypad from "./Keypad"

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [runningTotal, setRunningTotal] = useState(0);
  const [currentOperation, setCurrentOperation] = useState('');
  const [evaluatedState, setEvaluatedState] = useState(false)

  // handles displaying numbers
  const handleClick = (event) => {
      setDisplayValue(displayValue + event);
    }

  // handles clearing the screen
  const clearDisplay = () => {
    setDisplayValue('');
  }

  const clearMemory = () => {
    clearDisplay();
    setRunningTotal(0);
    setCurrentOperation('')

  }

  const calculate = (currentOperation, secondOperand) => {
    switch(currentOperation) {
      case "add": 
        setRunningTotal(prevRunningTotal => {
          const calculatedAnswer = prevRunningTotal + secondOperand;
          setDisplayValue(calculatedAnswer);
          setEvaluatedState(true);
          return calculatedAnswer;
        });
        return;
      case "subtract":
        setRunningTotal(prevRunningTotal => {
          const calculatedAnswer = prevRunningTotal - secondOperand;
          setDisplayValue(calculatedAnswer);
          setEvaluatedState(true);
          return calculatedAnswer;
        });
        return;
      case "multiply":
        setRunningTotal(prevRunningTotal => {
          const calculatedAnswer = prevRunningTotal * secondOperand;
          setDisplayValue(calculatedAnswer);
          setEvaluatedState(true);
          return calculatedAnswer
        });
        return;
      case "divide":
        if (secondOperand === 0) {
          setDisplayValue("ERROR: Cannot divide by 0");
          setEvaluatedState(true);
          break;
        } else {
        setRunningTotal(prevRunningTotal => {
          const calculatedAnswer = prevRunningTotal / secondOperand;
          setDisplayValue(calculatedAnswer);
          setEvaluatedState(true);
          return calculatedAnswer;
        })
        };
        return;
  }}

  // handles addition
  const performOperation = (operation) => {
    console.log("eval: ", evaluatedState)
    let operand = evaluatedState === true ? 0 : Number(displayValue);
    if (operation === "add") {
      setCurrentOperation(operation);
      setRunningTotal(runningTotal === 0 ? Number(displayValue) : runningTotal);
      clearDisplay();
      setEvaluatedState(false)
    } else if (operation === "subtract") {
      setCurrentOperation(operation);
      setRunningTotal(runningTotal === 0 ? Number(displayValue) : runningTotal);
      clearDisplay();
      setEvaluatedState(false)
    } else if (operation === "multiply") {
      setCurrentOperation(operation);
      setRunningTotal(runningTotal === 0 ? Number(displayValue) : runningTotal);
      clearDisplay();
      setEvaluatedState(false)
    } else if (operation === "divide") {
      setCurrentOperation(operation);
      setRunningTotal(runningTotal === 0 ? Number(displayValue) : runningTotal);
      clearDisplay();
      setEvaluatedState(false)
    } else if (operation === "evaluate") {
      calculate(currentOperation, operand);
      setEvaluatedState(true)
      }
    }

  return (
    <div className="calculator">
      <h1 className="main-heading">This is a Calculator</h1>
      <p>Do try It</p>
      <Display 
      displayValue={displayValue}
      setDisplayValue={setDisplayValue}
      />
      <Keypad 
      handleClick={handleClick} 
      clearDisplay={clearDisplay}
      performOperation={performOperation}
      clearMemory={clearMemory}/>
    </div>
  )
}

export default Calculator;