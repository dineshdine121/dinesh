import react, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createuser, deleteuser, updateuser } from './Store/UsersSlice';

const App =()=>{
  const [username,setUsername] = useState("")
   const [index,setIndex]= useState(null)
  const users = useSelector((state)=> state.usersDetails.users);
  const dispatch = useDispatch()
   const handleCreateUser=()=>{
    dispatch(createuser(username))
   };

   const handleDelete =(usr)=>{
       dispatch(deleteuser(usr))
   };

   const handleChange =(e)=>{
      setUsername(e.target.value)
   };
   const handleEdit =(usr,i)=>{
   setUsername(usr);
   setIndex(i)
   }
   const handleUpdateUser=()=>{
   dispatch(updateuser({index:index,newUser:username}))
   }
   return(
    <div>

      <h2> Welcome To Redux Toolkit</h2>
      <form>
        <label> User Name:</label>
        <input name='username' value={username} onChange={handleChange}></input>
      </form>
      { index === null ? <button onClick={handleCreateUser}>CreateUser</button>:<button onClick={handleUpdateUser}>UpdateUser</button>}
    
     <ul>
      {users.map((usr,i)=> <li key={i}>{usr}{" "} 
      <button onClick={()=>{handleEdit(usr,i)}}>Edit</button> 
        <button onClick={()=>{handleDelete(usr)}}>Delete</button> {" "}</li>)}
     </ul>
    </div>
  )
}
export default App;