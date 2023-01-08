import React from "react";
import "./menucard.css";

function MenuCard(props) {
  return (
    <div className="book-wrap">
      <div className="cover cover-left"></div>
      <div className="book">
        <div className="book-page">
          <div className="text-center">
            <div
              className="bg-img avt"
              //   style="background-image: url(assets/images/tuat.jpg);"
            ></div>
            <br />
            <h1 className="name">Tran Anh Tuat</h1>
            <br />
            <div className="social-list">
              <a href="https://www.facebook.com/trananh2001" target="_blank">
                <i className="bx bxl-facebook-square fb"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCnNgtK4tGlWcceXVzoyTg8Q?sub_confirmation=1"
                target="_blank"
              >
                <i className="bx bxl-youtube ytb"></i>
              </a>
              <a href="https://github.com/trananhtuat" target="_blank">
                <i className="bx bxl-github git"></i>
              </a>
            </div>
            <br />
            <p className="introduce">
              Hello, I'm <span className="txt-header">Tuat</span>. I am{" "}
              <span className="txt-header">Web/Mobile Developer</span>.
              Currently I'm living and working in Vung Tau, Vietnam. I'm
              building a Youtube channel to share my wonderful personal
              projects, you can visit
              <a
                href="https://www.youtube.com/channel/UCnNgtK4tGlWcceXVzoyTg8Q?sub_confirmation=1"
                target="_blank"
              >
                <span className="txt-header">here</span>
              </a>
              , and don't forget to{" "}
              <a
                href="https://www.youtube.com/channel/UCnNgtK4tGlWcceXVzoyTg8Q?sub_confirmation=1"
                target="_blank"
              >
                <span className="txt-header">Subscribe </span>
              </a>
              if you love my videos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
