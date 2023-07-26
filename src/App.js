import './App.css';
import { Route, Routes } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login/LoginPage';
import Details from './Pages/Details/Details'
import Setting from './Pages/Setting/Setting';
import Layout from './component/Layout/Layout';

function App() {



 
  return (
    <div >
      
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard   />} />
      <Route path="/home" element={<Dashboard/>} />
      <Route path="/details" element={<Details/>} />
      <Route path="/setting" element={<Layout/>} />
    </Routes>
      
    </div>
  );
}

export default App;
