import React, { useState } from "react";
import Dinesh_form from "./Dinesh_form";
import Dinesh_table from "./Dinesh_table";

const Dinesh_users=()=>{
    const[user,setuser]=useState({
        fname:"",
        lname:"",
        grade:"",
        teacher:"",
        fname:"",
        lname:"",

    })
    return (
        <div>
             <Dinesh_form user={user}/>
             <Dinesh_table/>
        </div>
    )
}
export default Dinesh_users;