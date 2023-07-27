import React from "react";
import profileImage from "../../assets/User_Pic.png";
import style from "./navbar.module.css";

const Navbar = ({ username, imageURL }) => {
  return (
    <div className={style.topNav}>
      <div className={style.topNavWrapper}>
        <div className={style.searchBox}>
          
        </div>
        <div className={style.TopNavRight}>
          <div className={style.username}>{username}</div>
          <div className={style.profileImage}>
            {imageURL ? (
              <img src={imageURL} alt="icon" style={{width:'5rem', height:'5rem', borderRadius:'5rem'}} />
            ) : (
              <img src={profileImage} alt="icon" style={{width:'5rem', height:'5rem', borderRadius:'5rem'}} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;