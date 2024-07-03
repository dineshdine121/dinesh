import React, { useState } from "react";
const ClickCounter =()=>{
const[count,setcount] =useState(0)

const handleIncrement=()=>{
    setcount(count=1);
}
    return(
        <div>
        <button onClick={handleIncrement}> Click Me</button>
        <h2> You Clicked{count} times</h2>
        </div>
    )
}
export default ClickCounter;