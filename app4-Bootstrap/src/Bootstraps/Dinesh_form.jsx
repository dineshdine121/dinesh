import React from "react";
const Dinesh_form = ({user})=>{
    return(
        <div>
        
        <form action="">
            <h1> Science Program</h1>
            <label htmlFor="">Student Name:</label>
            <input type="text" name="fname" placeholder="first" value={user.fname}/> 
            <input type="text" name="lname" placeholder="last" value={user.lname}/> <br /> <br />
            <label htmlFor="">Grade:</label>
            <input type="text" name="grade" value={user.grade}/> <br /> <br />
            <label htmlFor="">Teacher:</label>
            <input type="text" name="teacher" value={user.teacher}/> <br /> <br />
            <label htmlFor=""> Gaurdian Name:</label>
            <input type="text" name="fname" placeholder="first" value={user.fname}/>
            <input type="text" name="lname" placeholder="last" value={user.lname}/><br /><br />
            <button>Submit</button>
        </form>
        </div>
    )
}
export default Dinesh_form;