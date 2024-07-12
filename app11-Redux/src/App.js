import react from 'react'
import { useSelector } from 'react-redux'

const App =()=>{
   const users = useSelector((state)=> state.usersDetails.users);
  return(
    <div>

      <h2> Welcome To Redux Toolkit</h2>
     <ul>
      {users.map((usr,i)=> <li key={i}>{usr}</li>)}
     </ul>
    </div>
  )
}
export default App