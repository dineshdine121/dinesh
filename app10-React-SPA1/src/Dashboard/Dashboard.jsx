import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard=()=>{
    return(
        <div className="container">
         <h2>Welcome To Dashboard</h2>
        
        <ul>
            <li><NavLink>Products</NavLink></li>
            <li><NavLink>Projects</NavLink></li>
            <li><NavLink>Reviews</NavLink></li>
        </ul>
        </div>

    )
}

export default Dashboard;