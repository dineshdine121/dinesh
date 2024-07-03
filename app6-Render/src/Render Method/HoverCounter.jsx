import React, { useState } from "react";
const HoverCounter = ({ count, incrementCount }) => {



    return (
        <div>
            <button onMouseOver={incrementCount}> Hover On Me</button>
            <h2> You Hovered{count} times</h2>
        </div>
    )
}
export default HoverCounter;