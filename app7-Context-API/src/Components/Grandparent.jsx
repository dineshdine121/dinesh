import React from "react";
import Parent from "./Parent";
const Grandparent=({message})=>{
    return(
        <div id='grandParent'>
            <h2>GRANDPARENT</h2>
            <Parent message={message}/>
        </div>
    )
}
export default Grandparent;