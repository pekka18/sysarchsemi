import {Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Home/>}   />  
        <Route path="/about" element={<About/>}   /> 
        <Route path="/contact" element={<Contact/>}   />
        <Route path="/login" element={<Login/>}     />
        <Route path="/registration" element={<Registration/>}     />
      </Routes>
    </div>
  );
}

export default App;
