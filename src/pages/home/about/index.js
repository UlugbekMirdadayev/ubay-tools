import React from "react";
import { AboutSectionCont } from "./style";
import { Link } from "react-router-dom";
import {
  DotListStyle,
  InstagramIcon,
  QrCode,
  TelegramIcon,
} from "../../../components/icon";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutSection = ({ lang, langData }) => {
  return (
    <AboutSectionCont>
      <div className="container_">
        <div className="flex">
          <div className="space">
            <h1 className="title">Ubay tools</h1>
            <div className="prg">{langData.ubay_tool_text}</div>
            <div className="row">
              <Link className="link-btn" to={"/about"}>
                {langData.btn_more}
              </Link>
              <Link className="link-btn" to={"/about"}>
                {langData.more_video}
              </Link>
              <a
                href="https://t.me/ubay_tools"
                target="_blank"
                rel="noopener noreferrer"
                className="icon link-btn"
              >
                <TelegramIcon />
              </a>
              <a
                href="https://www.instagram.com/ubaytools.uz/"
                rel="noopener noreferrer"
                target="_blank"
                className="icon link-btn"
              >
                <InstagramIcon />
              </a>
            </div>
            <img
              src="https://api.ubaytools.com/Images/b7287dd7839b8253f6ad450adc0ca8ac.png"
              className="full-img-bottom"
              alt="..."
            />
          </div>
          <div className="middle">
            <div className="row">
              <QrCode className="qr_code" />
              <div className="column">
                <h3 className="text-3 title">{langData.load_catalog}</h3>
                <a
                  href="https://www.instagram.com/ubaytools.uz/"
                  className="text-small"
                >
                  {langData.pc_load}
                </a>
              </div>
            </div>
            <div className="link-btns">
              <Link className="primary" to={"/garantiya"}>
                {langData.warranty}
              </Link>
              <Link className="secondary" to={"/working"}>
                <DotListStyle />
                {langData.production}
              </Link>
              <Link className="primary" to={"/address"}>
                {langData.our_address}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="space full-cards">
            <h1 className="title">Ubay tools</h1>
            <Swiper slidesPerView={"auto"} className="row">
              {[1, 1, 1, 1, 1, 1, 1, 1]?.map((_, index) => (
                <SwiperSlide key={index} className="card">
                  <iframe
                    src="https://www.youtube.com/embed/UrdRNXAnxYQ"
                    title="Ubay"
                    allowFullScreen
                  />
                  <div className="title_card">Ubay electro tools</div>
                  <div className="prg_card">
                    Вас приветствует магазин электроники MacBro. У нас вы можете
                    найти всю продукцию Apple. Уже более 14 лет
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </AboutSectionCont>
  );
};

export default AboutSection;
