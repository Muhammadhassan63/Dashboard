import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Data from "../Content/Data";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

import style from "./layout.module.css";

export default function Layout() {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.data}>
        <Data />
      </div>
      <div className={style.mobileNavbarWrapper}>
        <MobileNavbar />
      </div>
    </div>
  );
}
