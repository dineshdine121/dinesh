import React from "react";
import Child from "./Child";
const Grandchild=({message})=>{
    return(
        <div id='grandChild'>
            <h2>GRANDCHILD</h2>
         <Child message={message}/>
        </div>
    )
}
export default Grandchild;