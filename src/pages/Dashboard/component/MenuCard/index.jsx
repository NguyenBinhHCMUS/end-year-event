import React from "react";
import "./menucard.css";
import logoImg from "../../../../assets/img/lgkhegr (1).png";

function MenuCard(props) {
  return (
    <div className="book-wrap">
      <div className="cover cover-left"></div>
      <div className="cover turn on-desktop"></div>
      <div className="book">
        <div className="book-page">
          <div className="text-center">
            <div className="bg-img avt">
              <img src={logoImg} width={100} height={100} alt="" />
            </div>
            <br />
            <h1 className="name">MENU</h1>
            <br />

            <br className="on-desktop" />
            <p className="introduce">
              Một bữa tiệc <span className="txt-header">"Tất niên"</span> dành
              cho những đóng góp của bạn cho chúng tôi. Những món ăn tươi ngon
              đảm bảo nguồn gốc và chất lượng thay cho lời cám ơn đến bạn.
              <br />
            </p>
            <ul className="menu-dish__list on-mobile">
              <li>1. Súp Đại Dương Nóng Nỏng</li>
              <li>2. Tuyết Tây Tạng Phủ Tôm</li>
              <li>3. Bò Cơ Bắp Tiêu Xanh</li>
              <li>4. Tinh Hoa Đất Việt</li>
              <li>5. Bống Mú Hóa Rồng</li>
              <li>6. Chè Hạt Sen Tuyết Nhĩ</li>
            </ul>
            <br className="on-mobile" />
            <h3>Chúc các bạn ngon miệng!</h3>
          </div>
        </div>
        <div className="book-page page-right on-desktop">
          <div className="text-center">
            <div className="bg-img avt">
              <img src={logoImg} width={100} height={100} alt="" />
            </div>
            <br />
            <h1 className="name">MENU</h1>
            <br />

            <br />
            <ul className="menu-dish__list">
              <li>1. Súp Đại Dương Nóng Nỏng</li>
              <li>2. Tuyết Tây Tạng Phủ Tôm</li>
              <li>3. Bò Cơ Bắp Tiêu Xanh</li>
              <li>4. Tinh Hoa Đất Việt</li>
              <li>5. Bống Mú Hóa Rồng</li>
              <li>6. Chè Hạt Sen Tuyết Nhĩ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
