import './App.css';
import { Route,Routes,useNavigate } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import RegistrationSuccess from './components/RegistrationSuccess';
import Logout from './components/Logout';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
      navigate("/dashboard");
    } else if(isRegisterClicked){
      setIsRegisterClicked(false);
      navigate("/register");
    }
    else {
      navigate("/login");
    } 
  },[])

  return (
    <>
      <Routes>
        <Route path="/login" element={ <Login onRegisterClick={()=>setIsRegisterClicked(true)}/>} />
        <Route path="/register" element={ <Registration />} />
        <Route path="/dashboard" element={<Dashboard user={user}/>} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
