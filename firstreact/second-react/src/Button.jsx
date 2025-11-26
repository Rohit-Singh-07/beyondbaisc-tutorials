import React from 'react'


const Button = ({changeValue, color}) => {
  return (
    <button onClick={changeValue} className="border px-5 py-2 rounded-full">Click me {color}</button>
  )
}

export default Button