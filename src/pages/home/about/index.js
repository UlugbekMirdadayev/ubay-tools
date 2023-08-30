import React, { useEffect, useState } from "react";
import { AboutSectionCont } from "./style";
import { Link } from "react-router-dom";
import {
  DotListStyle,
  InstagramIcon,
  QrCode,
  TelegramIcon,
} from "../../../components/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../../../api";
import { toast } from "react-toastify";
import { skeletionData, youtubeEmbed } from "../../../utils/constants";

const AboutSection = ({ lang, langData }) => {
  const [loading, setLoding] = useState(false);
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    setLoding(true);
    api
      .get_videos()
      .then(({ data }) => {
        setLoding(false);
        if (data?.data?.length) {
          setVideo(data?.data);
        } else {
          console.log(data);
          setVideo([]);
        }
      })
      .catch(({ message, ...err }) => {
        setLoding(false);
        console.log(err);
        toast.error(message);
      });
  }, []);

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
              src={require("../../../images/about.png")}
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
              <Link className="primary" to={"/warranty"}>
                {langData.warranty}
              </Link>
              <Link className="secondary" to={"/production"}>
                <DotListStyle />
                {langData.production}
              </Link>
              <Link className="primary" to={"/our-address"}>
                {langData.our_address}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="space full-cards">
            <h1 className="title">Ubay tools</h1>
            <Swiper slidesPerView={"auto"} className="row">
              {loading
                ? skeletionData.slider?.map((_, index) => (
                    <SwiperSlide key={index} className="card isLoading" />
                  ))
                : videos?.map((video, index) => (
                    <SwiperSlide key={index} className="card">
                      <iframe
                        src={youtubeEmbed(video?.url)}
                        title="Ubay"
                        allowFullScreen
                      />
                      <div className="title_card">
                        {lang === "uz" ? video?.title_uz : video?.title}
                      </div>
                      <div className="prg_card">
                        {lang === "uz" ? video?.desc_uz : video?.desc}
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
