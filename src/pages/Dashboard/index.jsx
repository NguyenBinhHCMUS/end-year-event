import React from "react";
import PropTypes from "prop-types";
import moonImg from "../../assets/img/moon.png";
import logoImg from "../../assets/img/logo-removebg-preview.png";
import dateImg from "../../assets/img/date.png";

Dashboard.propTypes = {};

function Dashboard(props) {
  return (
    <div>
      <div className="container">
        <div className="bgr-container">
          <div className="box-bgr">
            <div className="moon">
              <img src={moonImg} alt="" />
            </div>
            <div className="christmas-tree"></div>
            <div className="box-text-noel">
              <div className="text-noel">
                <img src={logoImg} alt="" />
              </div>
              <span></span>
            </div>
            <div className="house">
              <img src={dateImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      Dashboard
    </div>
  );
}

export default Dashboard;
