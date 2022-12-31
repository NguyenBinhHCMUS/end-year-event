import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Modal, Button } from "react-bootstrap";
import moonImg from "../../assets/img/moon.png";
import logoImg from "../../assets/img/lgkhegr (1).png";
import dateImg from "../../assets/img/date.png";
import macproImg from "../../assets/img/macbook-pro-m2.png";
import leftIcon from "../../assets/img/left_gh9ln8er1m6n_32 (1).png";
import rightIcon from "../../assets/img/right_vi24vzlqsbfj_32.png";
import adward2 from "../../assets/img/Picture1.png";
import adward3 from "../../assets/img/Picture2.png";
import TimerCountDown from "./component/TimerCountDown";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);
  const [startRandom, setStartRandom] = useState(false);
  const [slideActive, setSlideActive] = useState(0);
  const [slideAuto, setSlideAuto] = useState(true);
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setSlideAuto(false);
    setShow(true);
  };
  const handleResetNumber = () => {
    setStartRandom(false);
    setN1(0);
    setN2(0);
    setN3(0);
  };
  const handlePrevSlide = () => {
    const newSlideActive = slideActive === 0 ? 2 : slideActive - 1;
    setSlideActive(newSlideActive);
  };
  const handleNextSlide = () => {
    const newSlideActive = slideActive === 2 ? 0 : slideActive + 1;
    setSlideActive(newSlideActive);
  };

  const showToggleMenu = () => {
    const newShowMenu = !showMenu;
    setShowMenu(newShowMenu);
  };

  useEffect(() => {
    let timer = null;
    if (slideAuto && step === 2)
      timer = setTimeout(() => {
        handleNextSlide();
      }, 5000);
    return () => clearTimeout(timer);
  }, [step, slideActive, slideAuto]);

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
      timerTotal = 80,
      timerTick = 0,
      mousedown = false,
      // mouse x coordinate,
      mx,
      // mouse y coordinate
      my;
    console.log(canvas);

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

  const Slide = () => {
    return (
      <div className="slide-container">
        <div id="slide">
          <div className={`item ${slideActive === 0 && "slide-active"}`}>
            <div className="image">
              <img loading="lazy" src={macproImg} />
            </div>
            <div className="content">
              <div className="right">
                <h2>GIẢI ĐẶC BIỆT</h2>
                <ul>
                  <li>
                    <p>Tên sản phẩm</p>
                    <p>Apple MacBook Air M1 256GB</p>
                  </li>
                  <li>
                    <p>Năm sản xuất</p>
                    <p>2020</p>
                  </li>
                </ul>

                <hr />

                <h2 className="mt-4">NGƯỜI MAY MẮN</h2>
                <ul>
                  <li>
                    <p>Họ tên</p>
                    <p>???</p>
                  </li>
                  <li>
                    <p>Mã trúng thưởng</p>
                    <p>???</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-info">
              <Button variant="primary" onClick={handleShow}>
                Tiến hành quay số
              </Button>
            </div>
          </div>
          <div className={`item ${slideActive === 1 && "slide-active"}`}>
            <div className="image">
              <img loading="lazy" src={adward2} />
            </div>
            <div className="content">
              <div className="right">
                <h2>GIẢI HẤP DẪN</h2>
                <ul>
                  <li>
                    <p>Tên sản phẩm</p>
                    <p>Loa Bluetooth Marshall Tufton</p>
                  </li>
                </ul>

                <hr />

                <h2 className="mt-4">NGƯỜI MAY MẮN</h2>
                <ul>
                  <li>
                    <p>Họ tên</p>
                    <p>???</p>
                  </li>
                  <li>
                    <p>Mã trúng thưởng</p>
                    <p>???</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-info">
              <Button type="button" variant="primary" onClick={handleShow}>
                Tiến hành quay số
              </Button>
            </div>
          </div>
          <div className={`item ${slideActive === 2 && "slide-active"}`}>
            <div className="image">
              <img loading="lazy" src={adward3} />
            </div>
            <div className="content">
              <div className="right">
                <h2>GIẢI MONG CHỜ</h2>
                <ul>
                  <li>
                    <p>Tên sản phẩm</p>
                    <p>Apple Watch</p>
                    <p>Series 7 41mm GPS Viền Nhôm</p>
                  </li>
                </ul>

                <hr />

                <h2 className="mt-4">NGƯỜI MAY MẮN</h2>
                <ul>
                  <li>
                    <p>Họ tên</p>
                    <p>???</p>
                  </li>
                  <li>
                    <p>Mã trúng thưởng</p>
                    <p>???</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-info">
              <Button variant="primary" onClick={handleShow}>
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
      </div>
    );
  };
  return (
    <>
      <div className="menu-wrapper">
        <div className="moon">
          <button onClick={showToggleMenu}>
            <img src={moonImg} alt="" />
          </button>
          {!!showMenu && (
            <ul className="menu">
              <li
                onClick={() => setStep(1)}
                className={`menu-item ${step === 1 && "active"}`}
              >
                Trang chờ
              </li>
              <li
                onClick={() => setStep(2)}
                className={`menu-item ${step === 2 && "active"}`}
              >
                Quay số
              </li>
            </ul>
          )}
        </div>
      </div>
      <TimerCountDown />
      <div className="container">
        <div className="bgr-container">
          <div className="box-bgr">
            <div className="box-text-noel">
              <div className="text-noel">
                <img src={logoImg} alt="" width={250} />
              </div>
              <span></span>
            </div>
            {/* <div className='house'>
              <img src={dateImg} alt='' />
            </div> */}
          </div>
        </div>
        {step === 2 && (
          <section>
            <div className="box-santa">
              <Slide />
            </div>
          </section>
        )}
        {step === 0 && (
          <section>
            <div class="box-santa">
              <div class="santa-container">
                <div class="box-noel-gif">
                  <div class="noel-gif1"></div>
                  <div class="noel-gift2"></div>
                </div>
                <div class="box-gift">
                  <div class="gift-bottom"></div>
                  <div class="gift-top"></div>
                  <div class="box-fastener">
                    <div class="fastener1"></div>
                    <div class="fastener2"></div>
                  </div>
                  <div class="content"></div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
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
              <h2 className="text-center text-white w-100">
                Mã số dự thưởng ?
              </h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={`wrapper-number ${startRandom && "start"}`}>
              <div className="number-area">
                <span className="num n1" data-attr="5741278934">
                  {n1}
                </span>
              </div>
              <div className="number-area">
                <span className="num n2" data-attr="4785125986">
                  {n2}
                </span>
              </div>
              <div className="number-area">
                <span className="num n3" data-attr="2478649812">
                  {n3}
                </span>
              </div>
            </div>

            <div className="w-100 d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                className="mx-2"
                style={{ width: "100px" }}
                onClick={() => setStartRandom(true)}
              >
                Quay
              </Button>
              <Button
                variant="success"
                className="mx-2"
                style={{ width: "100px" }}
                onClick={() => handleResetNumber()}
              >
                Làm mới
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Lưu
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default Dashboard;
