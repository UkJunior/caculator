import React from 'react'

const numb = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "="];
const operands = ["DEL", "/", "*", "-", "+"];

const CalBody = ({handleClick }) => {
  return (
    <div className="operators-container">
    <div className="number-containers">
    {numb.map((num, index) => (
        <button
        key={index
        }
        className="numbers btn-number"
        value={num}
        onClick={(e) => handleClick(e)}
        type="button"
        >
        {num}
      </button>
     ))}
    </div>
    <div className="operand-containers">
    {operands.map((num, index) => (
      <button
        key={index}
        className="numbers btn-operand"
        value={num}
        onClick={(e) => handleClick(e)}
        type="button"
      >
        {num}
      </button>
    ))}
    </div>
    </div>
  )
}

export default CalBody;
