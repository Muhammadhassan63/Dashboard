import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Data from "../Content/Data";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { useNavigate } from "react-router-dom";
import style from "./layout.module.css";
import Setting from "../../Pages/Setting/Setting";
import Details from "../../Pages/Details/Details";


export default function Layout({handleLogout}) {
  const pathname = window.location.pathname

  const navigate= useNavigate();
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <Sidebar handleLogout={handleLogout}/>
      </div>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.data}>
      {pathname === "/home" ? (
        <Data />
      ) : pathname === "/setting" ? (
        <Setting />
      ) : pathname === "/details" ? (
        <Details />
      ) : (
        alert("error")
      )}
        
      </div>
      <div className={style.mobileNavbarWrapper}>
        <MobileNavbar />
      </div>
    </div>
  );
}
