import React, { useState } from "react";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import logoutIcon from "../../assets/logout-icon.png";

import style from "./sidebar.module.css";

export default function Sidebar() {
  const [activeNavItem, setActiveNavItem] = useState("Home"); 

  const handleNavItemClick = (item) => {
    setActiveNavItem(item); 
  };

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarTop}>
        <h2>
          <img className={style.logo} src={logo} alt="logo" />
          Logo/Company
        </h2>
      </div>
      <div className={style.sidebarContent}>
        <div className={style.menu}>
          <ul className={style.navlist}>
            <li
              className={`${style.navItem} ${
                activeNavItem === "Home" ? style.active : ""
              }`}
              onClick={() => handleNavItemClick("Home")}
            >
              <img className={style.icon} src={icon} alt="logo" />
              Home
            </li>
            <li
              className={`${style.navItem} ${
                activeNavItem === "Details" ? style.active : ""
              }`}
              onClick={() => handleNavItemClick("Details")}
            >
              <img className={style.icon} src={icon1} alt="logo" />
              Details
            </li>
            <li
              className={`${style.navItem} ${
                activeNavItem === "Setting" ? style.active : ""
              }`}
              onClick={() => handleNavItemClick("Setting")}
            >
              <img className={style.icon} src={icon2} alt="logo" />
              Setting
            </li>
          </ul>
        </div>
        <div className={style.sidebarBottom}>
          <li className={style.navItem}>
            <img src={logoutIcon} alt="icon" /> Logout
          </li>
        </div>
      </div>
    </div>
  );
}
