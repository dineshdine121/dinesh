import React, { useState } from "react";
const HoverCounter =()=>{
    const[count,setcount] =useState(0)

    return(
        <div>
        <button> Hover On Me</button>
        <h2> You Hovered{count} times</h2>
        </div>
    )
}
export default HoverCounter;