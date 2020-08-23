import React from "react";
import "./InfoBar.scss";
import closeIcon from "../../assets/icons/closeIcon.png";
import onlineIcon from "../../assets/icons/onlineIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} className="onlineIcon" alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
