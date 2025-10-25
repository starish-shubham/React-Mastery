import React from 'react'

const Greet = () => {
  const date = new Date();
  return (
    <p>
      Hello Shubham, I am Greet.jsx file
      <br />
      Current date = {date.toString()}
      <br />
      Current year = {date.getFullYear()}
      <br />
      Current month = {date.getMonth() + 1}
      <br />
      Current day = {date.getDate()}
      <br />
      Current time = {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      <br />
      Timezone = {}
    </p>
  )
}

export default Greet
