import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import macproImg from "../../../assets/img/macbook-pro-m2.png";
import adward2 from "../../../assets/img/Picture1.png";
import adward3 from "../../../assets/img/Picture2.png";
import leftIcon from "../../../assets/img/left_gh9ln8er1m6n_32 (1).png";
import rightIcon from "../../../assets/img/right_vi24vzlqsbfj_32.png";
import "./slide.css";

function Slide(props) {
  const [slideActive, setSlideActive] = useState(0);
  const [slideAuto, setSlideAuto] = useState(true);
  const handlePrevSlide = () => {
    const newSlideActive = slideActive === 0 ? 2 : slideActive - 1;
    setSlideActive(newSlideActive);
  };
  const handleNextSlide = () => {
    const newSlideActive = slideActive === 2 ? 0 : slideActive + 1;
    setSlideActive(newSlideActive);
  };

  useEffect(() => {
    let timer = null;
    if (slideAuto)
      timer = setTimeout(() => {
        handleNextSlide();
      }, 5000);
    return () => clearTimeout(timer);
  }, [slideActive, slideAuto]);
  return (
    <div className="slide-container">
      <div id="slide">
        <div className={`item ${slideActive === 0 && "slide-active"}`}>
          <h2 className="slide-item__title">01 GIẢI ĐẶC BIỆT</h2>
          <div style={{ position: "relative", width: "100%", height: "auto" }}>
            <div className="image">
              <img loading="lazy" src={macproImg} />
            </div>
          </div>
          <p style={{ padding: "0 12px", textAlign: "center" }}>
            Apple MacBook Air M1 256GB
          </p>
          <div className="user-info">
            <Button type="button" variant="primary">
              Tiến hành quay số
            </Button>
          </div>
        </div>
        <div className={`item ${slideActive === 1 && "slide-active"}`}>
          <h2 className="slide-item__title">01 GIẢI HẤP DẪN</h2>
          <div style={{ position: "relative", width: "100%", height: "auto" }}>
            <div className="image">
              <img loading="lazy" src={adward2} />
            </div>
          </div>
          <p style={{ padding: "0 12px", textAlign: "center" }}>
            Loa Bluetooth Marshall Tufton
          </p>
          <div className="user-info">
            <Button type="button" variant="primary">
              Tiến hành quay số
            </Button>
          </div>
        </div>
        <div className={`item ${slideActive === 2 && "slide-active"}`}>
          <h2 className="slide-item__title">01 GIẢI MONG CHỜ</h2>
          <div style={{ position: "relative", width: "100%", height: "auto" }}>
            <div className="image">
              <img loading="lazy" src={adward3} />
            </div>
          </div>
          <p style={{ padding: "0 12px", textAlign: "center" }}>
            Apple Watch Series 7 41mm GPS Viền Nhôm
          </p>
          <div className="user-info">
            <Button type="button" variant="primary">
              Tiến hành quay số
            </Button>
          </div>
        </div>
      </div>
      <div className="directional">
        <button id="prev" onClick={handlePrevSlide}>
          <img src={leftIcon} alt="" />
        </button>
        <button id="next" onClick={handleNextSlide}>
          <img src={rightIcon} alt="" />
        </button>
      </div>
      <div className="auto-slide">
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Tự động"
            checked={slideAuto}
            value={slideAuto}
            onChange={() => setSlideAuto(!slideAuto)}
          />
        </Form>
      </div>
    </div>
  );
}

export default Slide;
