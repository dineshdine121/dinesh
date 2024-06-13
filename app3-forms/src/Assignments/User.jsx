// import { Component } from "react";

// export class User extends Component {
//     state = {
//         userDetails:{
//         fname: "",
//         lname: "",
//         email: "",
//         },
//         allUsers:[]
//     };
//     handleChange = (e) => {
//         const inputName = e.target.name;

//         //3steps are required to change the class components
//         //copy the state
//         //change the value
//         //update the state
//         const newState = { ...this.state };
//         newState.userDetails[inputName] = e.target.value;
//         this.setState(newState);
//     }
//     addUser=()=>{
//         const newState = { ...this.state };
//         newState.allUsers.push({...this.state.userDetails});
//         this.setState(newState);
//     }
//     render() {
//         return <div>
//             <h2> Welcome to Reactjs forms</h2>
//             <hr />
//             <form>
//                 <label htmlFor="">First Name</label>
//                 <input type="text" name="fname" value={this.state.userDetails.fname} onChange={this.handleChange} /> <br />
//                 <label htmlFor="">Last Name</label>
//                 <input type="text" name="lname" value={this.state.userDetails.lname} onChange={this.handleChange} /> <br />
//                 <label htmlFor="">Email</label>
//                 <input type="text" name="email" value={this.state.userDetails.email} onChange={this.handleChange} /> <br />
//                 <button type="button" onClick={this.addUser}>Add User</button>
//             </form>

//             <table border={1}>
//                 <thead>
//                     <tr>
//                         <td>First Name</td>
//                         <td>Last Name</td>
//                         <td>Email</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.allUsers.map((obj)=>{
//                         <tr>
//                             <td></td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     }
// }