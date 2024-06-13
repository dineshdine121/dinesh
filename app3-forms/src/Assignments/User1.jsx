import { Component } from "react";

export class User1 extends Component {
    state = {
        userDetails: {
            fname: "",
            email: "",
            investment: "",
            datajoined: "",
            active: "",
        },
        allUsers: [],
        showUpdateBtn: false,
        index:null
    };
    handleChange = (e) => {
        const inputName = e.target.name;
        const newState = { ...this.state };
        newState.userDetails[inputName] = e.target.value;
        this.setState(newState);
    }
    addUser = () => {
        const newState = { ...this.state };
        newState.allUsers.push({ ...this.state.userDetails });
        this.setState(newState);
        this.clearForm()
    };
    clearForm = () => {
        const newState = { ...this.state };
        newState.userDetails = {
            fname: "",
            email: "",
            investment: "",
            datajoined: "",
            active: "",
        }
        this.setState(newState);
    }
    deleteUser = (i) => {
        const newState = { ...this.state };
        newState.allUsers.splice(i, 1);
        this.setState(newState);
    }
    editUser = (obj,i) => {
        const newState = { ...this.state };
        newState.userDetails = obj;
        newState.showUpdateBtn = true;
        newState.index =i;
        this.setState(newState);
    }
    updateUser=()=>{
        const newState = { ...this.state };
        newState.allUsers[this.state.index]=this.state.userDetails;
        newState.showUpdateBtn = false;
        this.setState(newState);
        this.clearForm()
    }
    render() {
        return <div>
            <h2>Customer</h2>
            <hr />
            <form>
                <label htmlFor="">First Name</label>
                <input type="text" name="fname" value={this.state.userDetails.fname} onChange={this.handleChange} /> <br />
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={this.state.userDetails.email} onChange={this.handleChange} /> <br />
                <label htmlFor="">investment</label>
                <input type="text" name="investment" value={this.state.userDetails.investment} onChange={this.handleChange} /> <br />
                <label htmlFor="">datajoined</label>
                <input type="text" name="datajoined" value={this.state.userDetails.datajoined} onChange={this.handleChange} /> <br />
                <label htmlFor="">active</label>
                <input type="text" name="active" value={this.state.userDetails.active} onChange={this.handleChange} /> <br />
                <button type="button" onClick={this.addUser}>AddUser</button>
                {this.state.showUpdateBtn ? (
                    <button type="button" onClick={this.updateUser}>UpdateUser</button>) :
                    (<button type="button" onClick={this.addUser}>AddUser</button>
                    )}
            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Email</td>
                        <td>Investment</td>
                        <td>Datajoined</td>
                        <td>Active</td>
                        <td>Edit User</td>
                        <td>Delete User</td>

                    </tr>
                </thead>
                <tbody>
                    {this.state.allUsers.map((obj, i) => {

                        return <tr>
                            <td>{obj.fname}</td>
                            <td>{obj.email}</td>
                            <td>{obj.investment}</td>
                            <td>{obj.datajoined}</td>
                            <td>{obj.active}</td>
                            <td><button onClick={() => { this.editUser(obj) }}>Edit User</button></td>
                            <td><button type="button" onClick={() => { this.deleteUser(i) }}>Delete User</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}