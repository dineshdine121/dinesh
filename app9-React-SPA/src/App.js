import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Routes>
      </Router>
    {/* <Home/>
    <About/>
    <Contact/> */}
    </div>
  );
}

export default App;
