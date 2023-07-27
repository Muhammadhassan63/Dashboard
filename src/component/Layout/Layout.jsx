import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Data from "../Content/Data";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import style from "./layout.module.css";
import Setting from "../../Pages/Setting/Setting";
import Details from "../../Pages/Details/Details";
import { useState } from "react";


export default function Layout({handleLogout}) {
  const [username, setUsername] = useState("Admin");
  const [imageURL, setImageURL] = useState(null);
  const pathname = window.location.pathname
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <Sidebar handleLogout={handleLogout}/>
      </div>
      <div className={style.navbar}>
      <Navbar username={username} imageURL={imageURL} />
      </div>
      <div className={style.data}>
      {pathname === "/home" ? (
        <Data />
      ) : pathname === "/setting" ? (
        <Setting
        setUsername={setUsername}
        setImageURL={setImageURL}
        initialUsername={username}
        initialImageURL={imageURL}
      />
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