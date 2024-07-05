import React from "react";
import Grandchild from "./Grandchild";
const Parent=({message})=>{
    return(
        <div id='parent'>
            <h2>PARENT</h2>
        <Grandchild message={message}/>
        </div>
    )
}
export default Parent;