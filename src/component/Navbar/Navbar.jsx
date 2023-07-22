import React from "react";
import profileImage from '../../assets/User_Pic.png'
import notification from '../../assets/notification.png'
import barIcon from '../../assets/barIcon.png'
import navIcon from '../../assets/navIcon.png'



import style from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.topNav}>
      <div className={style.topNavWrapper}>
        <div className={style.searchBox}>
            <img src={navIcon} alt="icon" />
          <input type="text" placeholder="Type Something" />
        </div>
        <div className={style.TopNavRight}>
          <div className={style.icons}>
            <img src={barIcon} alt="icon" />
          </div>
          <div className={style.icons}>
            <img src={notification} alt="icon" />
          </div>
          <div className={style.profileImage}>
              <img src={profileImage} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;