import './App.css';
import { Route, Routes } from "react-router-dom"

import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login/LoginPage';

function App() {
  return (
    <div >
      
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
      
    </div>
  );
}

export default App;
