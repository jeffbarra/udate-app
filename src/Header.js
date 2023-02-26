import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";

import IconButton from "@mui/material/IconButton";
import logo from "./images/tinder-logo.png";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img src={logo} className="header__logo" />
      <IconButton>
        <ForumRoundedIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
