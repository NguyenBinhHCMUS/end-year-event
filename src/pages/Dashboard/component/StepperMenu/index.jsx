import React from "react";
import "./steppermenu.css";
import logoImg from "../../../../assets/img/lgkhegr (1).webp";

function StepperMenu(props) {
  return (
    <div className="stepper-book-wrap">
      <div className="cover cover-left"></div>
      <div className="cover turn on-desktop"></div>
      <div className="book">
        <div className="stepper-book-page">
          <div className="text-center">
            <div className="bg-img avt">
              <img src={logoImg} width={100} height={100} alt="" />
            </div>
            <h1 className="name">KẾ HOẠCH</h1>
            <br />
          </div>

          <br className="on-desktop" />
          <div className="row">
            <div className="col-4 col-sm-3">17:00 - 18:00</div>
            <div className="col-8 col-sm-9">
              Đón khách & chụp hình tại photobooth
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-sm-3">18:30 - 18:35</div>
            <div className="col-8 col-sm-9">
              MC welcome guests & Invite Speech
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-sm-3">18:35 - 18:43</div>
            <div className="col-8 col-sm-9">
              Key Performance "The tree of light"
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-sm-3">18:43 - 18:50</div>
            <div className="col-8 col-sm-9">
              Opening speech/ Đại diện phát biểu về thành tựu của Khè Group 2022
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-sm-3">18:50 - 18:53</div>
            <div className="col-8 col-sm-9">
              Video nhìn lại hành trình Khè Group 2022
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-sm-3">18:53 - 19:03</div>
            <div className="col-8 col-sm-9">
              Trao giải phòng ban Khè Group 2022
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-sm-3">19:03 - 19:08</div>
            <div className="col-8 col-sm-9">Biểu diễn performance 1</div>
          </div>
          <div className="row">
            <div className="col-4 col-sm-3">19:08 - 19:38</div>
            <div className="col-8 col-sm-9">
              Bài phát biểu của đại diện về thành tựu các Outlets & Trao giải
              Booking 2022
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-sm-3">19:38 - 19:48</div>
            <div className="col-8 col-sm-9">
              Lãnh đạo Khè Group lên sân khấu để phát biểu về định hướng phát
              triển2023
            </div>
          </div>
          <div className="row on-mobile-grid">
            <div className="col-4 col-sm-3">19:48 - 19:55</div>
            <div className="col-8 col-sm-9">
              MC cảm ơn và mời BOD lên sân khấu để làm cheering moment
            </div>
          </div>
          <div className="row on-mobile-grid">
            <div className="col-4 col-sm-3">19:55 - 20:20</div>
            <div className="col-8 col-sm-9">Lên đồ ăn tiệc chính </div>
          </div>
          <div className="row on-mobile-grid">
            <div className="col-4 col-sm-3">19:20 - 20:30</div>
            <div className="col-8 col-sm-9">
              MT beatbox & Tiết mục "The mask singer" (Nicky)
            </div>
          </div>
          <div className="row on-mobile-grid">
            <div className="col-4 col-sm-3">20:30 - 20:40</div>
            <div className="col-8 col-sm-9">Lucky Draw/Rút thăm may mắn</div>
          </div>
          <div className="row on-mobile-grid">
            <div className="col-4 col-sm-3">20:40 - 20:45</div>
            <div className="col-8 col-sm-9">
              Tiết mục trình diễn Suri x Nhân sự Khè
            </div>
          </div>
          <div className="row on-mobile-grid">
            <div className="col-4 col-sm-3">20:45 - 21:45</div>
            <div className="col-8 col-sm-9">Free time</div>
          </div>
          <div className="row on-mobile-grid">
            <div className="col-4 col-sm-3">22:00 - Hết</div>
            <div className="col-8 col-sm-9">DJ Trình diễn</div>
          </div>
        </div>
        <div className="stepper-book-page page-right on-desktop">
          <div className="text-center">
            <div className="bg-img avt">
              <img src={logoImg} width={100} height={100} alt="" />
            </div>
            <br />
            <h1 className="name">KẾ HOẠCH</h1>
            <br />
          </div>

          <br className="on-desktop" />
          <div className="row py-1">
            <div className="col-3">19:38 - 19:48</div>
            <div className="col-9">
              Lãnh đạo Khè Group lên sân khấu để phát biểu về định hướng phát
              triển2023
            </div>
          </div>
          <div className="row py-1">
            <div className="col-3">19:48 - 19:55</div>
            <div className="col-9">
              MC cảm ơn và mời BOD lên sân khấu để làm cheering moment
            </div>
          </div>
          <div className="row py-1">
            <div className="col-3">19:55 - 20:20</div>
            <div className="col-9">Lên đồ ăn tiệc chính </div>
          </div>
          <div className="row py-1">
            <div className="col-3">19:20 - 20:30</div>
            <div className="col-9">
              MT beatbox & Tiết mục "The mask singer" (Nicky)
            </div>
          </div>
          <div className="row py-1">
            <div className="col-3">20:30 - 20:40</div>
            <div className="col-9">Lucky Draw/Rút thăm may mắn</div>
          </div>
          <div className="row py-1">
            <div className="col-3">20:40 - 20:45</div>
            <div className="col-9">Tiết mục trình diễn Suri x Nhân sự Khè</div>
          </div>
          <div className="row py-1">
            <div className="col-3">20:45 - 21:45</div>
            <div className="col-9">Free time</div>
          </div>
          <div className="row py-1">
            <div className="col-3">22:00 - Hết</div>
            <div className="col-9">DJ Trình diễn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepperMenu;
