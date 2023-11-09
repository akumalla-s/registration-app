import './App.css';
import { Route,Routes,useNavigate } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import RegistrationSuccess from './components/RegistrationSuccess';
import Logout from './components/Logout';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();    

  const [user, setUser] = useState(null);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
      navigate("/dashboard")
    }else if(isRegisterClicked){
      setIsRegisterClicked(false);
      navigate("/register");
    }else{
      navigate("/login");
    }
  }, [setUser]);

  return (
    <>
    <div className='container'>
      <div className='header'>
        <Header/>
      </div>
      <div className='body'>
        <Routes>
        <Route path="/login" element={ <Login onRegisterClick={()=>setIsRegisterClicked(true)}/>} />
          <Route path="/register" element={ <Registration />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
