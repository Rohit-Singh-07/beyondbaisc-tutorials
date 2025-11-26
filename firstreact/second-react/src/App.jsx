import React, { useState } from "react";
import Button from "./Button";

const App = () => {
  //hooks

  //useState
  const [a, setA] = useState("Any String");

  function changeValue() {
    setA("I am the function that changes the value of a useState");
  }

  function changeValue2() {
    setA("Kuch Aur");
  }

  // console.log(a) : array of 2 elem -> first stores value, second is a function

  return (
    <div className="w-full h-screen bg-black text-white text-4xl flex gap-5 flex-col justify-center items-center">
      <div className="">{a}</div>
      <Button changeValue={changeValue} color='red'/>
      <Button changeValue={changeValue2}/>
    </div>
  );
};

export default App;
