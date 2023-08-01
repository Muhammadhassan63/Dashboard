import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import logoutIcon from "../../assets/logout-icon.png";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../AuthContext';
import style from "./sidebar.module.css";

export default function Sidebar() {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { label: "Home", icon: icon, route: "/home" },
    { label: "Details", icon: icon1, route: "/details" },
    { label: "Setting", icon: icon2, route: "/setting" },
  ];

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarTop}>
        <h2>
          <img className={style.logo} src={logo} alt="logo" />
        </h2>
      </div>
      <div className={style.sidebarContent}>
        <div className={style.menu}>
          <ul className={style.navlist}>
            {navigationItems.map((item) => (
              <li
                key={item.label}
                className={`${style.navItem} ${
                  location.pathname === item.route ? style.active : ""
                }`}
                onClick={() => navigate(item.route)}
              >
                <img className={style.icon} src={item.icon} alt={item.label} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.sidebarBottom}>
          <li className={style.navItem}>
            <img src={logoutIcon} alt="icon" />
            <Link to="/login" className={style.logout} onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}
