import React, { useState } from "react";
import { useEffect } from "react";

const User1 = () => {
    const [userDetails, setUserDetails] = useState({
        Name: "",
        Email: "",
        Investment: "",
        DateJoined: "",
        Active: [],
    });
    const [allUsers, setAllUsers] = useState([]);
    const [index, setIndex] = useState(null);
    useEffect(() => {
        const newUsers = JSON.parse(localStorage.getItem("users"));
        newUsers && setAllUsers(newUsers);
    }, []);

    const handleChange = (e) => {
        const newUser = { ...userDetails };
        newUser[e.target.name] = e.target.value;
        setUserDetails(newUser);
    };

    const addUser = () => {
        const newAllUsers = [...allUsers];
        newAllUsers.push(userDetails);
        setAllUsers(newAllUsers);
        localStorage.setItem("users", JSON.stringify(newAllUsers));
        clearForm();
    };

    const editUser = (usr, i) => {
        setUserDetails(usr);
        setIndex(i);
    };

    const deleteUser = (index) => {
        const newAllUsers = allUsers.filter((_, i) => i !== index);
        setAllUsers(newAllUsers);
        localStorage.setItem("users", JSON.stringify(newAllUsers));
        clearForm();
    };

    const updateUser = () => {
        const newUsers = [...allUsers];
        newUsers[index] = userDetails;
        setAllUsers(newUsers);
        setIndex(null);
        clearForm();
    };

    const clearForm = () => {
        setUserDetails({
            Name: "",
            Email: "",
            Investment: "",
            DateJoined: "",
            Active: [],
        });
    };
    const handleCheckboxChange = (e) => {
        console.log(e.target.checked);
        const newUserDetails = { ...userDetails };
        if (e.target.checked) {
            newUserDetails.subjects.push(e.target.value);
        } else {
            newUserDetails.subjects = newUserDetails.subjects.filter((val) => {
                return val !== e.target.value;
            });
        }
        setUserDetails(newUserDetails);
    };
    const validate = () => {
        for (let a in userDetails) {
            if (a !== "subjects") {
                if (userDetails[a] === "") {
                    return true;
                }
            } else {
                if (userDetails[a].length === 0) {
                    return true;
                }
            }
        }
        return false;
    };
    const { Name,Email,Investment, DateJoined, Active } = userDetails;

    return (
        <div>
            <div>
                <h1>Customer</h1>
            </div>
            <div className="container ">
                <div className="row ">
                    <div className="col-5">
                        <form>
                        <div className="mb-5">
                                <label htmlFor="exampleInputName1" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="Name"
                                    className="form-control"
                                    name="Name"
                                    value={Name}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="Email"
                                    className="form-control"
                                    name="Email"
                                    value={Email}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="" className="form-label">
                                    Investment{" "}
                                </label>
                                <select
                                    className="form-select"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    name="Investment"
                                    value={Investment}
                                >
                                    <option value={""}>Investment</option>
                                    <option value="10000">
                                        10000
                                    </option>
                                    <option value="20000">20000</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="exampleInputName1" className="form-label">
                                    DateJoined
                                </label>
                                <input
                                    type="Name"
                                    className="form-control"
                                    name="DateJoined"
                                    value={DateJoined}
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="" className="form-label">
                                    Active{" "}
                                </label>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value="yes"
                                        name="Active"
                                        onChange={handleCheckboxChange}
                                        checked={Active.indexOf("HTML") > -1}
                                    />
                                    <label class="form-check-label" for="flexCheckDefault">
                                
                                    </label>
                                </div>
                            </div>
                            {index !== null ? (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={updateUser}
                                >
                                    Update User
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={addUser}
                                    disabled={validate()}
                                >
                                    Add User
                                </button>
                            )}
                        </form>
                    </div>
                    <div className="col-7">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Investment</th>
                                    <th>DateJoined</th>
                                    <th>Active</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((usr, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{usr.Name}</td>
                                            <td>{usr.Email}</td>
                                            <td>{usr.Investment}</td>
                                            <td>{usr.DateJoined}</td>
                                            <td>{usr.Active}</td>
                                            <td>
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={() => {
                                                        editUser(usr, i);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => deleteUser(i)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User1;
