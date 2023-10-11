import { useState } from "react";
import './App.css'


export default function App() {
  // 1. Turn the borderRadius variable into a state variable.
  let borderRadius = "0%";

  const getBorderRadius = () => {
    // 2. Update the state of borderRadius.
    //  - Have the values toggle between '0%' and '50%'
    //  - HINT: A conditional statement would help here.
  };

  
  // DO NOT MODIFY CODE BELOW THIS LINE
  return (
    <div className="App">
      <div
        className="diamond"
        style={{
          backgroundColor: "#b9f2ff",
          borderRadius: borderRadius
        }}
      ></div>
      <button onClick={getBorderRadius}>Change Shape</button>
    </div>
  );
}
