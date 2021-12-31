import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Register from './register';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Header/><Home/></>}/>
        <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>
        <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
        <Route exact path="/register" element={<Register/>}/>
        {/* <Route exact path="/" element={<><Header/><Home/></>}/>
         <Route exact path="/" element={<><Header/><Home/></>}/> */}
      </Routes>
    </Router>
    
  );
}

export default App;
