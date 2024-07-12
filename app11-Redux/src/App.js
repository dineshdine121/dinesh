import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createuser, deleteuser } from './Store/UsersSlice';

const App =()=>{
   const users = useSelector((state)=> state.usersDetails.users);
  const dispatch = useDispatch()
   const handleCreateUser=()=>{
    dispatch(createuser("dinesh"))
   }

   const handleDelete =(usr)=>{
       dispatch(deleteuser(usr))
   }
   return(
    <div>

      <h2> Welcome To Redux Toolkit</h2>
    <button onClick={handleCreateUser}>CreateUser</button>
     <ul>
      {users.map((usr,i)=> <li key={i}>{usr} <button onClick={()=>{handleDelete(usr)}}>Delete</button></li>)}
     </ul>
    </div>
  )
}
export default App;