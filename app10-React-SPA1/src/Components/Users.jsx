import React, { useEffect } from "react";
import { useState } from "react";

const Users = () => {
    const [usersDetails, setUsersDetails] = useState([]);
    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = async () => {
        const response = (await fetch("https://jsonplaceholder.typicode.com/users").then());
        const users = await response.json();
        setUsersDetails(users);
    };

    return (
        <div>
            {usersDetails.map((usr,i) => <p key={i}> {usr.name}</p>)}
        </div>
    )
}
export default Users;