import React, { useEffect, useState } from "react";
import Dinesh_form from "./Dinesh_form";
import Dinesh_table from "./Dinesh_table";
import axios from 'axios';
const Dinesh_users = () => {
    const [user, setuser] = useState({
        fname: "",
        lname: "",
        grade: "",
        teacher: "",
        fname: "",
        lname: "",
    });
    const [allUsers, setAllUsers] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const getUsersFromServer = () => {
        axios.get("http://localhost:4200/Dine_users").then(({ data }) => {
            setAllUsers(data)
            console.log(data)
        })
    };
    useEffect(() => {
        getUsersFromServer();
    }, [])
    const editUser = (usr) => {
        setuser(usr);
        setIsEdit(true);
    }
    const deleteUser = (usr) => {
        axios.delete("http://localhost:4200/Dine_users/" + usr.id).then(() => {
            getUsersFromServer();
        })
    }
    const updateUser = () => {
        axios.put("http://localhost:4200/Dine_users/" + user.id, user).then(() => {
            getUsersFromServer();
            clearUser();
            setIsEdit(false);
        })
    }
    const clearUser = () => {
        setuser({
            name: "",
            email: "",
            password: "",
        });
    };
    const handleChange = (e) => {
        console.log(e)
        const newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setuser(newUser);
    };
    const createUser = () => {
        axios.post("http://localhost:4200/Dine_users", user).then(() => {
            console.log("User Added Successfully !!!");
            clearUser();
            getUsersFromServer();
        });






    }
    return (
        <div>
            <h2 style={{ color: 'red' }}>Hello</h2>
            <Dinesh_form
                handleChange={handleChange}
                user={user}
                createUser={createUser}
                isEdit={isEdit}
                updateUser={updateUser} />
            <Dinesh_table allUsers={allUsers}
                editUser={editUser}
                deleteUser={deleteUser} />
        </div>
    )
};
export default Dinesh_users;