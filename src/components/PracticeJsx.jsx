import React from 'react'

const PracticeJsx = () => {
    const myName = "Shubham Gupta";
    const multiply = (a, b) => a * b;
    const customClass = "my-style";
  return (
    <div className={customClass}>
      <h1>My Name is {myName}</h1>
      <h2>Multiplication Result: {multiply(3, 3)}</h2>
      <>My Friends List : {[<ul><li>Friend 1</li>, <li>Friend 2</li>, <li>Friend 3</li></ul>]}</>
    </div>
  )
}

export default PracticeJsx
