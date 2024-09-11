const Keypad = ({handleClick, clearDisplay, performOperation, clearMemory}) => {

  return (
    <div className="keypad">
      <button onClick={() => performOperation("add")}>+</button>
      <button onClick={() => performOperation("subtract")}>-</button>
      <button onClick={() => performOperation("multiply")}>*</button>
      <button onClick={() => performOperation("divide")}>/</button>
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick(4)}>4</button>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(6)}>6</button>
      <button onClick={() => handleClick(7)}>7</button>
      <button onClick={() => handleClick(8)}>8</button>
      <button onClick={() => handleClick(9)}>9</button>
      <button onClick={() => handleClick(0)}>0</button>
      <button className="clearDisplay" onClick={() => clearDisplay()}>C</button>
      <button className="clearMemory" onClick={() => clearMemory()}>AC</button>
      <button className="equals" onClick={() => performOperation("evaluate")}>=</button>
      
    </div>
  )
}

export default Keypad;