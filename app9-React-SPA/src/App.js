import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import PageNotFound from "./Components/PageNotFound";
import Register from './Components/Register';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
       </Routes>

      </Router>
    {/* <Home/>
    <About/>
    <Contact/> */}
    </div>
  );
}

export default App;
