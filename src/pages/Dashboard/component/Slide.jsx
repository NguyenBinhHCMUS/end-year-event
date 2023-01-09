import React, { useState, useEffect } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import macproImg from "../../../assets/img/macbook-pro-m2.png";
import adward2 from "../../../assets/img/Picture1.png";
import adward3 from "../../../assets/img/Picture2.png";
import adward4 from "../../../assets/img/Picture4 (1).png";
import adward5 from "../../../assets/img/randomImg.jpg";
import leftIcon from "../../../assets/img/left_gh9ln8er1m6n_32 (1).png";
import rightIcon from "../../../assets/img/right_vi24vzlqsbfj_32.png";
import "./slide.css";

const PASSWORD = "khegroup2023";
const PASSWORD2 = "random";

function Slide(props) {
  const [showModal, setShowModal] = useState(false);
  const [slideActive, setSlideActive] = useState(0);
  const [slideAuto, setSlideAuto] = useState(true);
  const [adwardSelected, setAdwardSelected] = useState();
  const [password, setPassword] = useState("");
  const handlePrevSlide = () => {
    const newSlideActive = slideActive === 0 ? 4 : slideActive - 1;
    setSlideActive(newSlideActive);
  };
  const handleNextSlide = () => {
    const newSlideActive = slideActive === 4 ? 0 : slideActive + 1;
    setSlideActive(newSlideActive);
  };

  const handleShow = (idAdward) => {
    setSlideAuto(false);
    setShowModal(true);
    setAdwardSelected(idAdward);
    // props.onSubmit(idAdward);
  };

  const handleComparePassword = () => {
    if (PASSWORD === password && adwardSelected)
      props.onSubmit(adwardSelected, 1);
    if (PASSWORD2 === password && adwardSelected)
      props.onSubmit(adwardSelected, 2);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
    <>
      <div className="slide-container">
        <div id="slide">
          <div className={`item ${slideActive === 0 && "slide-active"}`}>
            <h2 className="slide-item__title">01 GIẢI ĐẶC BIỆT</h2>
            <div
              style={{ position: "relative", width: "100%", height: "auto" }}
            >
              <div className="image">
                <img loading="lazy" src={macproImg} />
              </div>
            </div>
            <p style={{ padding: "0 12px", textAlign: "center" }}>
              Apple MacBook Air M1 256GB
            </p>
            <div className="user-info">
              <Button
                type="button"
                variant="primary"
                onClick={() => handleShow(1)}
              >
                Tiến hành quay số
              </Button>
            </div>
          </div>
          <div className={`item ${slideActive === 1 && "slide-active"}`}>
            <h2 className="slide-item__title">01 GIẢI HẤP DẪN</h2>
            <div
              style={{ position: "relative", width: "100%", height: "auto" }}
            >
              <div className="image">
                <img loading="lazy" src={adward2} />
              </div>
            </div>
            <p style={{ padding: "0 12px", textAlign: "center" }}>
              Loa Bluetooth Marshall Tufton
            </p>
            <div className="user-info">
              <Button
                type="button"
                variant="primary"
                onClick={() => handleShow(2)}
              >
                Tiến hành quay số
              </Button>
            </div>
          </div>
          <div className={`item ${slideActive === 2 && "slide-active"}`}>
            <h2 className="slide-item__title">01 GIẢI MONG CHỜ</h2>
            <div
              style={{ position: "relative", width: "100%", height: "auto" }}
            >
              <div className="image">
                <img loading="lazy" src={adward3} />
              </div>
            </div>
            <p style={{ padding: "0 12px", textAlign: "center" }}>
              Apple Watch Series 7 41mm GPS Viền Nhôm
            </p>
            <div className="user-info">
              <Button
                type="button"
                variant="primary"
                onClick={() => handleShow(3)}
              >
                Tiến hành quay số
              </Button>
            </div>
          </div>
          <div className={`item ${slideActive === 3 && "slide-active"}`}>
            <h2 className="slide-item__title">03 GIẢI PHỤ</h2>
            <div
              style={{ position: "relative", width: "100%", height: "auto" }}
            >
              <div className="image">
                <img className="image-04" loading="lazy" src={adward4} />
              </div>
            </div>
            <p style={{ padding: "0 12px", textAlign: "center" }}>
              Pernod Ricard
            </p>
            <div className="user-info">
              <Button
                type="button"
                variant="primary"
                onClick={() => handleShow(4)}
              >
                Tiến hành quay số
              </Button>
            </div>
          </div>
          <div className={`item ${slideActive === 4 && "slide-active"}`}>
            <h2 className="slide-item__title">GIẢI MỞ RỘNG</h2>
            <div
              style={{ position: "relative", width: "100%", height: "auto" }}
            >
              <div className="image">
                <img loading="lazy" src={adward5} />
              </div>
            </div>
            <p style={{ padding: "0 12px", textAlign: "center" }}></p>
            <div className="user-info">
              <Button
                type="button"
                variant="primary"
                onClick={() => handleShow(5)}
              >
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
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        // fullscreen
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{ background: "#00092f" }}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2 className="text-center text-white w-100">
                Nhập mật khẩu quay số
              </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="my-2">
              <Form.Control
                placeholder="Mã khẩu"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="primary"
                id="button-addon2"
                onClick={handleComparePassword}
              >
                Kiểm tra
              </Button>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Đóng
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default Slide;
