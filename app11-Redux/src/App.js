import react from 'react'
import { useSelector } from 'react-redux'
const App =()=>{
  const users = useSelector((state)=>state.usersDetails.users)
 console.log(users)
  return(
    <div>
      <h2> Welcome To Redux Toolkit</h2>
   <ul>
    {users.map((usr)=> <li></li>)}
   </ul>
    </div>
  )
}
export default App