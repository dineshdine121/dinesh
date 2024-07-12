import react, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createuser, deleteuser } from './Store/UsersSlice';

const App =()=>{
  const [username,setUsername] = useState("")
   const users = useSelector((state)=> state.usersDetails.users);
  const dispatch = useDispatch()
   const handleCreateUser=()=>{
    dispatch(createuser(username))
   }

   const handleDelete =(usr)=>{
       dispatch(deleteuser(usr))
   }

   const handleChange =(e)=>{
      setUsername(e.target.value)
   }
   return(
    <div>

      <h2> Welcome To Redux Toolkit</h2>
      <form>
        <label> User Name:</label>
        <input name='username' value={username} onChange={handleChange}></input>
      </form>
    <button onClick={handleCreateUser}>CreateUser</button>
     <ul>
      {users.map((usr,i)=> <li key={i}>{usr} <button onClick={()=>{handleDelete(usr)}}>Delete</button></li>)}
     </ul>
    </div>
  )
}
export default App;