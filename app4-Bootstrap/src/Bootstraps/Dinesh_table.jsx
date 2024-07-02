import React from "react";
const Dinesh_table = ({ allUsers, editUser, deleteUser }) => {
    return (
        <div>


            <table border="1">
                <thead>

                    <tr>
                        <th>Student Name</th>
                        <th>Grade</th>
                        <th>Teacher</th>
                        <th>Gaurdian Name</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, i) => {

                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.grade}</td>
                            <td>{user.teacher}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { editUser(user) }}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-primary" onClick={() => { deleteUser(user) }}>Delete</button>
                            </td>

                        </tr>
                    })

                    }
                </tbody>
            </table>
        </div>
    )
}
export default Dinesh_table;