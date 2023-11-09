import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import RegistrationSuccess from "./components/RegistrationSuccess";
import Logout from "./components/Logout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider, useAuth } from "./components/AuthContext";

function App() {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find((user) => user.username === loggedInUser);

    if (loggedInUser) {
      dispatch({ type: "LOGIN", payload: user });
      navigate("/dashboard");
    } else if (isRegisterClicked) {
      setIsRegisterClicked(false);
      navigate("/register");
    } else {
      navigate("/login");
    }
  }, [dispatch]);

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Routes>
          <Route
            path="/login"
            element={
              <Login onRegisterClick={() => setIsRegisterClicked(true)} />
            }
          />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/registration-success"
            element={<RegistrationSuccess />}
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

function AppWithAuthProvider() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AppWithAuthProvider;
