import React, { useMemo } from "react";
import { AboutStyled } from "./style";
import locale from "../../localization/locale.json";
import { Link } from "react-router-dom";
import Selectors from "../../redux/selectors";
import {
  DotListStyle,
  InstagramIcon,
  QrCode,
  TelegramIcon,
} from "../../components/icon";

const About = () => {
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["home"], [lang]);
  return (
    <AboutStyled className="page-container">
      <div className="flex">
        <div className="space">
          <h1 className="title">Ubay tools</h1>
          <div className="prg">{langData.ubay_tool_text}</div>
          <div className="row">
            <a href="tel:+998 (71) 011 89 34" className="link-btn" to={"/about"}>
              {langData.call_me}
            </a>
            <Link className="link-btn" to={"/address"}>
              {langData.our_address}
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
        </div>
        <div className="middle">
          <div className="grid">
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
      <img
        src="https://api.ubaytools.com/Images/b7287dd7839b8253f6ad450adc0ca8ac.png"
        className="full-img-bottom"
        alt="..."
      />
    </AboutStyled>
  );
};

export default About;
