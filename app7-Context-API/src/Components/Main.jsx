import React, { useState } from "react";
import Grandparent from "./Grandparent";
import { UserContextProvider } from "./UserContext";
const Main=()=>{
    const[message,setMessage] = useState("Welcome To Context API")
    const[greeting,setgreeting]=useState("hello.....Context API")
    return(
        <div id='mainDiv'>
            <h2>MAIN</h2>
           <UserContextProvider value={greeting}>
        <Grandparent message={message}/>
        </UserContextProvider>
        </div>
    )
}
export default Main;