import React from "react";
const Dinesh_form = ({ handleChange, user, createUser, isEdit, updateUser })=>{
    return(
        <div>
        
        <form action="">
            <h1> Science Program</h1>
            <label htmlFor="">Student Name:</label>
            <input type="text" name="fname" placeholder="first" value={user.fname}
             onChange={handleChange}/> 
            <input type="text" name="lname" placeholder="last" value={user.lname}
            onChange={handleChange}/>
             <br /> <br />
           
            <label htmlFor="">Grade:</label>
            <input type="text"
             name="grade"
             value={user.grade}
             onChange={handleChange}/> <br /> <br />

            <label htmlFor="">Teacher:</label>
            <input type="text"
             name="teacher" 
            value={user.teacher}
             onChange={handleChange}/> <br /> <br />

            <label htmlFor=""> Gaurdian Name:</label>
            <input type="text" name="fname" placeholder="first" value={user.fname}/>
            <input type="text" name="lname" placeholder="last" value={user.lname}/><br /><br />
            {isEdit ? (
          <button
            type="button"
            className="btn btn-success"
            onClick={updateUser}
          >
            Update User
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-info"
            onClick={createUser}
          >
            Create User
          </button>
        )}
        </form>
        </div>
    )
}
export default Dinesh_form;