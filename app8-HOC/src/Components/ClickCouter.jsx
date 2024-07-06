import React, { useState } from "react";

const ClickCounter = () => {
    const [count, setCount] = useState(0);
   const incrementCount =()=>{
    setCount(count+1)
   }
   const decrementCount =()=>{
    setCount(count-1)
   }
    return (
        <div>
<h2>You Clicked{count} Times!!!</h2>
<button onClick={incrementCount}>Increment</button>
<button onClick={decrementCount}>Decrement</button>
        </div>
    )
}

export default ClickCounter;