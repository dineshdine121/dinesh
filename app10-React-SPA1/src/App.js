import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Users from './Components/Users';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/users' element ={<Users/>}/>
        <Route path='*' element ={<PageNotFound/>}/>
        <Route path='/dashboard' element ={<Dashboard/>}/>
      </Routes>
      </Router>
      
      <Users/>
    </div>
  );
}

export default App;
