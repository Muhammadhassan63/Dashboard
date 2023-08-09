import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './Pages/Login/LoginPage';
import Layout from './component/Layout/Layout';
import { AuthContext } from './AuthContext.js'; 




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    console.log(token)

    if (token) {
      setIsLoggedIn(true);
    }

    setTimeout(() => {
      localStorage.removeItem("jwtToken");
      setIsLoggedIn(false);
    }, 600000);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("jwtToken", token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false);
  };


   



  
  
  return (
    <div>
    <AuthContext.Provider value={{ handleLogout }}>

      <Routes>
        {/* Set LoginPage as the initial route */}
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login handleLogin={handleLogin} />} />
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/home" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />} />
        <Route path="/details" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />} />
        <Route path="/setting" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />} />
      </Routes>
      </AuthContext.Provider>

    </div>
  );
}

export default App;