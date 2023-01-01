import React, { useState, useRef, useEffect } from "react";
const TIME_PLACE = {
  date: "18:00 - 22:00 | Thứ hai, ngày 09.01.2023",
};

TimerCountDown.propTypes = {};

function TimerCountDown(props) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  useEffect(() => {
    const countDownDate = new Date("Jan 09, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days < 10 ? `0${days}` : `${days}`);
        setTimerHours(hours < 10 ? `0${hours}` : `${hours}`);
        setTimerMinutes(minutes < 10 ? `0${minutes}` : `${minutes}`);
        setTimerSeconds(seconds < 10 ? `0${seconds}` : `${seconds}`);
      }
    });
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="left-info">
      <div className="left-info-container">
        <div className="left-info__time">
          <div className="left-info__time-item left-info__time-item__content--border">
            <div className="left-info__time-item__content">{timerDays}</div>
            <div>Ngày</div>
          </div>
          <div className="left-info__time-item left-info__time-item__content--border">
            <div className="left-info__time-item__content">{timerHours}</div>
            <div>Giờ</div>
          </div>
          <div className="left-info__time-item left-info__time-item__content--border">
            <div className="left-info__time-item__content">{timerMinutes}</div>
            <div>Phút</div>
          </div>
          <div className="left-info__time-item ">
            <div className="left-info__time-item__content">{timerSeconds}</div>
            <div>Giây</div>
          </div>
        </div>
        <div className="left-info__subcontent">{TIME_PLACE.date}</div>
      </div>
    </div>
  );
}

export default TimerCountDown;
