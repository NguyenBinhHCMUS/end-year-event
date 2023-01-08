import React, { useEffect, useState } from "react";
import "./dashboard.css";
import {
  Modal,
  Button,
  Form,
  InputGroup,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import backgoundImg from "../../assets/img/tree.png";
import logoImg from "../../assets/img/lgkhegr (1).png";
import logo2Img from "../../assets/img/LOGO KHE-01.png";
import logo3Img from "../../assets/img/lgDK.png";
import logo4Img from "../../assets/img/LGDORI.png";
import dateImg from "../../assets/img/logo-removebg-preview.png";
import card from "../../assets/img/thiep.png";
import Slide from "./component/Slide";
import BottomNav from "./component/BottomNav";
import Stepper from "./component/Stepper";
import MenuCard from "./component/MenuCard";

function Dashboard() {
  const [navigator, setNavigator] = useState("home");
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [startRandom, setStartRandom] = useState(false);
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  const [code, setCode] = useState();
  const [infoParticipant, setInfoParticipant] = useState();

  const handleNavigator = (target) => {
    setNavigator(target);
  };

  const handleClose = () => setShow(false);
  const handleCloseInfo = () => setShowInfo(false);

  const handleGetInfoByCode = async () => {
    try {
      if (code) {
        setShow(false);
        const response = await axios.get(
          `https://b0ae-171-248-107-217.ap.ngrok.io/Participant/GetParticipantByCode?Code=${code}`,
          { withCredentials: true }
        );
        if (response.data?.data) {
          const { data } = response.data;
          setInfoParticipant(data);
          setShowInfo(true);
          localStorage.setItem("info", JSON.stringify(data));
        } else {
          <Alert variant="danger">
            Xin lỗi chúng tôi không tìm thấy thông tin của bạn!
          </Alert>;
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleCheckAgain = () => {
    setShowInfo(false);
    setShow(true);
  };

  const handleCheck = () => {
    if (infoParticipant) setShowInfo(true);
    else setShow(true);
  };

  const handleRandomNumber = async (idAdward) => {
    try {
      if (idAdward) {
        const response = await axios.get(
          `https://b0ae-171-248-107-217.ap.ngrok.io/Participant/GetInfoRewardRecipients/${idAdward}`,
          { withCredentials: true }
        );
        if (response.data?.data) {
          const { data } = response.data;
          const n1 = data[0];
          const n2 = data[1];
          const n3 = data[2];
          setN1(data[0]);
          setN2(data[1]);
          setN3(data[2]);
          setShow(true);

          // setInfoParticipant(data);
          // setShowInfo(true);
        } else {
          <Alert variant="danger">Có lỗi vấn đề đường truyền!</Alert>;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const codeSave = JSON.parse(localStorage.getItem("code"));
    if (codeSave) setInfoParticipant(codeSave);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (infoParticipant === null) setShow(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [infoParticipant]);

  useEffect(() => {
    // when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
    // not supported in all browsers though and sometimes needs a prefix, so we need a shim
    requestAnimationFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    // now we will setup our basic variables for the demo
    var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      // full screen dimensions
      cw = window.innerWidth,
      ch = window.innerHeight,
      // firework collection
      fireworks = [],
      // particle collection
      particles = [],
      // starting hue
      hue = 120,
      // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
      limiterTotal = 5,
      limiterTick = 0,
      // this will time the auto launches of fireworks, one launch per 80 loop ticks
      timerTotal = 40,
      timerTick = 0,
      mousedown = false,
      // mouse x coordinate,
      mx,
      // mouse y coordinate
      my;

    // set canvas dimensions
    canvas.width = cw;
    canvas.height = ch;

    // now we are going to setup our function placeholders for the entire demo

    // get a random number within a range
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    // calculate the distance between two points
    function calculateDistance(p1x, p1y, p2x, p2y) {
      var xDistance = p1x - p2x,
        yDistance = p1y - p2y;
      return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }

    // create firework
    function Firework(sx, sy, tx, ty) {
      // actual coordinates
      this.x = sx;
      this.y = sy;
      // starting coordinates
      this.sx = sx;
      this.sy = sy;
      // target coordinates
      this.tx = tx;
      this.ty = ty;
      // distance from starting point to target
      this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
      this.distanceTraveled = 0;
      // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
      this.coordinates = [];
      this.coordinateCount = 3;
      // populate initial coordinate collection with the current coordinates
      while (this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }
      this.angle = Math.atan2(ty - sy, tx - sx);
      this.speed = 2;
      this.acceleration = 1.05;
      this.brightness = random(50, 70);
      // circle target indicator radius
      this.targetRadius = 1;
    }

    // update firework
    Firework.prototype.update = function (index) {
      // remove last item in coordinates array
      this.coordinates.pop();
      // add current coordinates to the start of the array
      this.coordinates.unshift([this.x, this.y]);

      // cycle the circle target indicator radius
      if (this.targetRadius < 8) {
        this.targetRadius += 0.3;
      } else {
        this.targetRadius = 1;
      }

      // speed up the firework
      this.speed *= this.acceleration;

      // get the current velocities based on angle and speed
      var vx = Math.cos(this.angle) * this.speed,
        vy = Math.sin(this.angle) * this.speed;
      // how far will the firework have traveled with velocities applied?
      this.distanceTraveled = calculateDistance(
        this.sx,
        this.sy,
        this.x + vx,
        this.y + vy
      );

      // if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
      if (this.distanceTraveled >= this.distanceToTarget) {
        createParticles(this.tx, this.ty);
        // remove the firework, use the index passed into the update function to determine which to remove
        fireworks.splice(index, 1);
      } else {
        // target not reached, keep traveling
        this.x += vx;
        this.y += vy;
      }
    };

    // draw firework
    Firework.prototype.draw = function () {
      ctx.beginPath();
      // move to the last tracked coordinate in the set, then draw a line to the current x and y
      ctx.moveTo(
        this.coordinates[this.coordinates.length - 1][0],
        this.coordinates[this.coordinates.length - 1][1]
      );
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = "hsl(" + hue + ", 100%, " + this.brightness + "%)";
      ctx.stroke();

      ctx.beginPath();
      // draw the target for this firework with a pulsing circle
      ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
      ctx.stroke();
    };

    // create particle
    function Particle(x, y) {
      this.x = x;
      this.y = y;
      // track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
      this.coordinates = [];
      this.coordinateCount = 5;
      while (this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }
      // set a random angle in all possible directions, in radians
      this.angle = random(0, Math.PI * 2);
      this.speed = random(1, 10);
      // friction will slow the particle down
      this.friction = 0.95;
      // gravity will be applied and pull the particle down
      this.gravity = 1;
      // set the hue to a random number +-20 of the overall hue variable
      this.hue = random(hue - 20, hue + 20);
      this.brightness = random(50, 80);
      this.alpha = 1;
      // set how fast the particle fades out
      this.decay = random(0.015, 0.03);
    }

    // update particle
    Particle.prototype.update = function (index) {
      // remove last item in coordinates array
      this.coordinates.pop();
      // add current coordinates to the start of the array
      this.coordinates.unshift([this.x, this.y]);
      // slow down the particle
      this.speed *= this.friction;
      // apply velocity
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + this.gravity;
      // fade out the particle
      this.alpha -= this.decay;

      // remove the particle once the alpha is low enough, based on the passed in index
      if (this.alpha <= this.decay) {
        particles.splice(index, 1);
      }
    };

    // draw particle
    Particle.prototype.draw = function () {
      ctx.beginPath();
      // move to the last tracked coordinates in the set, then draw a line to the current x and y
      ctx.moveTo(
        this.coordinates[this.coordinates.length - 1][0],
        this.coordinates[this.coordinates.length - 1][1]
      );
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle =
        "hsla(" +
        this.hue +
        ", 100%, " +
        this.brightness +
        "%, " +
        this.alpha +
        ")";
      ctx.stroke();
    };

    // create particle group/explosion
    function createParticles(x, y) {
      // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
      var particleCount = 30;
      while (particleCount--) {
        particles.push(new Particle(x, y));
      }
    }

    // main demo loop
    function loop() {
      // this function will run endlessly with requestAnimationFrame
      requestAnimationFrame(loop);

      // increase the hue to get different colored fireworks over time
      hue += 0.5;

      // normally, clearRect() would be used to clear the canvas
      // we want to create a trailing effect though
      // setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
      ctx.globalCompositeOperation = "destination-out";
      // decrease the alpha property to create more prominent trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect(0, 0, cw, ch);
      // change the composite operation back to our main mode
      // lighter creates bright highlight points as the fireworks and particles overlap each other
      ctx.globalCompositeOperation = "lighter";

      // loop over each firework, draw it, update it
      var i = fireworks.length;
      while (i--) {
        fireworks[i].draw();
        fireworks[i].update(i);
      }

      // loop over each particle, draw it, update it
      var i = particles.length;
      while (i--) {
        particles[i].draw();
        particles[i].update(i);
      }

      // launch fireworks automatically to random coordinates, when the mouse isn't down
      if (timerTick >= timerTotal) {
        if (!mousedown) {
          // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
          fireworks.push(
            new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2))
          );
          timerTick = 0;
        }
      } else {
        timerTick++;
      }

      // limit the rate at which fireworks get launched when mouse is down
      if (limiterTick >= limiterTotal) {
        if (mousedown) {
          // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
          fireworks.push(new Firework(cw / 2, ch, mx, my));
          limiterTick = 0;
        }
      } else {
        limiterTick++;
      }
    }

    // mouse event bindings
    // update the mouse coordinates on mousemove
    canvas.addEventListener("mousemove", function (e) {
      mx = e.pageX - canvas.offsetLeft;
      my = e.pageY - canvas.offsetTop;
    });

    // toggle mousedown state and prevent canvas from being selected
    canvas.addEventListener("mousedown", function (e) {
      e.preventDefault();
      mousedown = true;
    });

    canvas.addEventListener("mouseup", function (e) {
      e.preventDefault();
      mousedown = false;
    });

    // once the window loads, we are ready for some fireworks!
    window.onload = loop;
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <img loading="lazy" src={logoImg} alt="" />
          <img loading="lazy" src={logo2Img} alt="" />
          <img loading="lazy" src={logo3Img} alt="" />
          <img loading="lazy" src={logo4Img} alt="" />
        </div>
      </header>
      {navigator === "home" && (
        <div className="info">
          <div className="info-container">
            <div className="house mt-4">
              <img src={dateImg} alt="" />
            </div>
            {/* <TimerCountDown /> */}
            <div className="info-content">
              <h1 className="info-content-title">CÁM ƠN BẠN ĐÃ ĐẾN!</h1>
              <hr />
              <p className="info-content__thanks">
                Công ty Khè Group chân thành cám ơn những đóng góp to lớn của
                bạn cho chúng tôi.
              </p>
              <div className="info-content__address">
                <div className="info-content__address__left">
                  <h3>18:00 - 22:00</h3>
                  <p>
                    Dresscode: BLACK & SILVER SHIMMER <br /> (Đen & Bạc láp
                    lánh)
                  </p>
                </div>
                <div className="info-content__address__right">
                  <h3>THE BAO MANSION</h3>
                  <p>755 Nguyễn Duy Trinh, P. Phú Hữu, TP Thủ Đức</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {navigator === "timeline" && (
        <div className="timeline-container">
          <Stepper />
        </div>
      )}

      {navigator === "menu" && (
        <div className="menu-container">
          <MenuCard />
        </div>
      )}
      {navigator === "luckydraw" && <Slide onSubmit={handleRandomNumber} />}
      {/* <div className="check-image">
        <button style={{ border: "none" }} onClick={handleCheck}>
          <img src={card} alt="" />
        </button>
      </div> */}

      <div className="backgound-image">
        {/* <img loading="lazy" src={backgoundImg} alt="" /> */}
      </div>

      <footer>
        <BottomNav onSubmit={handleNavigator} />
      </footer>

      <canvas id="canvas"> </canvas>
      <Modal
        show={show}
        onHide={handleClose}
        // fullscreen
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{ background: "#00092f" }}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2 className="text-center text-white w-100">Xác nhận tham dự</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="my-2">
              <Form.Control
                placeholder="Mã dự thưởng"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setCode(e.target.value)}
              />
              <Button
                variant="primary"
                id="button-addon2"
                onClick={handleGetInfoByCode}
              >
                Kiểm tra
              </Button>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
      <Modal
        show={showInfo}
        onHide={handleCloseInfo}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{ background: "#00092f" }}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2 className="text-center text-white w-100">
                Thông tin khách mời
              </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col className="text-white">Họ tên: </Col>
                <Col className="text-white">{infoParticipant?.userName}</Col>
              </Row>
              <Row>
                <Col className="text-white">Mã số trúng thưởng: </Col>
                <Col style={{ color: "#f2d377" }}>{infoParticipant?.code}</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseInfo}>
              Đóng
            </Button>
            <Button variant="primary" onClick={handleCheckAgain}>
              Thử lại
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default Dashboard;
