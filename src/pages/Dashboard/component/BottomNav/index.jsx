import React, { useEffect, useState } from "react";
import "./bottomnav.css";

function BottomNav({ onSubmit }) {
  const [target, setTarget] = useState("home");
  const handleNavigator = (target) => {
    setTarget(target);
    onSubmit(target);
  };

  useEffect(() => {
    let nav = document.querySelector(".nav");

    nav.querySelectorAll("li a").forEach((a, i) => {
      a.onclick = (e) => {
        if (a.classList.contains("nav-item-active")) return;

        nav.querySelectorAll("li a").forEach((el) => {
          el.classList.remove("nav-item-active");
        });

        a.classList.add("nav-item-active");

        let nav_indicator = nav.querySelector(".nav-indicator");

        nav_indicator.style.left = `calc(${i * 25}%)`;
      };
    });
  }, []);
  return (
    <div>
      <ul className="nav">
        <span className="nav-indicator"></span>
        <li>
          <a
            onClick={() => handleNavigator("home")}
            className="nav-item-active"
          >
            <i className="bx bx-home"></i>
            <span className="title">Trang chủ</span>
          </a>
        </li>
        <li>
          <a onClick={() => handleNavigator("timeline")}>
            <i className="bx bx-book-content"></i>
            <span className="title">Kế hoạch</span>
          </a>
        </li>
        <li>
          <a onClick={() => handleNavigator("menu")}>
            <i className="bx bx-receipt"></i>
            <span className="title">Món ăn</span>
          </a>
        </li>
        <li>
          <a onClick={() => handleNavigator("luckydraw")}>
            <i className="bx bx-gift"></i>
            <span className="title">Quay số</span>
          </a>
        </li>
      </ul>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default BottomNav;
