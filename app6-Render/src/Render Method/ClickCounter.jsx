import React, { useState } from "react";
const ClickCounter = ({count,incrementCount}) => {
    return (
        <div>
            <h2> You Clicked{count} times</h2>
            <button onClick={incrementCount}> Click Me</button>
        </div>
    )
}
export default ClickCounter;