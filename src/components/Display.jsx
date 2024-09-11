const Display = ({displayValue, setDisplayValue}) => {
  return (
    // <input 
    //   type="text" 
    //   className="display" 
    //   value={displayValue}
    //   onChange={event => setDisplayValue(event.target.value)}
    // />
    <div className="display">
      {displayValue}
    </div>
  )
}

export default Display;