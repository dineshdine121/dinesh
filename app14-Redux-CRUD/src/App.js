import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAction, deleteUserAction, readUserAction, updateUserAction } from './Store/Actions';
import { useEffect, useState } from 'react';

function App() {
  const [username,setusername] = useState("")
  const usersInfo =useSelector((state)=>state.users);
 const [isEdit, setIsEdit] = useState(false)
 const[index,setIndex] = useState(null)
 const dispatch = useDispatch()
 console.log(usersInfo)

  const handleCreateUser =()=>{
    console.log("handleCreateUser Called !!")
    dispatch(createUserAction("Ramu"))
  }
  const readusers=()=>{
    dispatch(readUserAction())
  }

  const handleDelete=(usr)=>{
    dispatch(deleteUserAction(usr))
  }
  const handleChange=(e)=>{
  const newUsername = e.target.value;
  setusername(newUsername)
  }
  const handleSubmit=()=>{
    dispatch(createUserAction(username))
  }
  const handleEdit=(usr,i)=>{
    setIsEdit(true);
    setusername(usr);
    setIndex(i)
  }
  const handleUpdate=()=>{
    dispatch(updateUserAction({username,index}))
  }
  useEffect(()=>{
   readusers()
  },[])
  return (
    <div className="App">
      <h1> Welcome To Redux......!!!</h1>
   <button onClick={handleCreateUser}>Create User</button>
    

    <hr/>
    <form>
      <label> User Name : </label>
      <input type='text' name='username' value={username} onChange={handleChange}/>
      {isEdit? <button onClick={handleUpdate} type='button'> Update User</button> :
      <button onClick={handleSubmit} type='button'>Add User</button>
      }
      </form>
    <ul>
      {usersInfo.map((usr,i)=> <li key={i}>{usr}
         <button onClick={()=>{handleDelete(usr)}}> Delete</button>
         <button onClick={()=>{handleEdit(usr,i)}}> Edit</button>
         </li>)}
    </ul>
    </div>
  );
}

export default App;
