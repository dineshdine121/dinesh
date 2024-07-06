import React, { useState } from "react";

const HoverCounter=()=>{
    const [count, setCount] = useState(0);
    const incrementCount =()=>{
     setCount(count+1)
    }
    const decrementCount =()=>{
     setCount(count-1)
    }
    return(
    <div>
    <h2>You Hovered{count} Times!!!</h2>
<button onMouseOver={incrementCount}>Increment</button>
<button onMouseOut={decrementCount}>Decrement</button>
        </div>
)
}

export default HoverCounter;