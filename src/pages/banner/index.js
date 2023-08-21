import React from "react";
import { BannerStyled } from "./style";
// import { useParams } from "react-router-dom";
// import { API } from "../../utils/constants";

const Banner = () => {
//   const { id } = useParams();

//   console.log(id);

  return (
    <BannerStyled>
      <div className="top_row">
        <div className="img_place">
          <img
            src={require("../../images/banner-top.png")}
            alt="banner_bg"
            className="banner_bg"
          />
          <img
            src={require("../../images/prod.png")}
            className="prod_image"
            alt="prod"
          />
        </div>
        <div className="infos">
          <h1>{"Ubay\nDrills"}</h1>
          <p>
            <span>Ubey</span>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a
          </p>
          <div className="row_btn">
            <button className="primary">Sotib olish</button>
            <button>katalog yuklab olish</button>
          </div>
        </div>
      </div>
      <div className="second_row">
        <div className="img_place">
          <img
            src={require("../../images/banner-top.png")}
            alt="banner_bg"
            className="banner_bg"
          />
          <img
            src={require("../../images/prod.png")}
            className="prod_image"
            alt="prod"
          />
        </div>
        <div className="infos">
          <h3>Drill 907</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the releas
          </p>
        </div>
      </div>
      <div className="threed_row">
        <div className="left">
          <div className="top">
            <div className="number">2X</div>
            <div className="popup">batareka quvvati</div>
          </div>
          <div className="bottom">
            <div className="popup">sifatli maxsulot</div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </p>
          </div>
          <div className="bottom">
            <div className="img_place">
              <img
                src={require("../../images/banner-top.png")}
                alt="banner_bg"
                className="banner_bg"
              />
              <img
                src={require("../../images/drell-in-hand.png")}
                className="prod_image"
                alt="prod"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fourth_row">
        <div className="space">
          <ul>
            <li>
              <span>TORQUE :</span>
              <span>115IN -IBS</span>
            </li>
            <li>
              <span>RPM :</span>
              <span>0-650</span>
            </li>
            <li>
              <span>MAX CHUCK SIZE:</span>
              <span>3/8IN</span>
            </li>
            <li>
              <span>CLUTH SRTTINGS:</span>
              <span>11</span>
            </li>
            <li>
              <span>WEIGHT:</span>
              <span>2.5 IBS</span>
            </li>
            <li>
              <span>L*W*H:</span>
              <span>8*3*9</span>
            </li>
          </ul>

          <ul>
            <li>
              <span>TORQUE :</span>
              <span>115IN -IBS</span>
            </li>
            <li>
              <span>RPM :</span>
              <span>0-650</span>
            </li>
            <li>
              <span>MAX CHUCK SIZE:</span>
              <span>3/8IN</span>
            </li>
            <li>
              <span>CLUTH SRTTINGS:</span>
              <span>11</span>
            </li>
            <li>
              <span>WEIGHT:</span>
              <span>2.5 IBS</span>
            </li>
            <li>
              <span>L*W*H:</span>
              <span>8*3*9</span>
            </li>
          </ul>
        </div>
        <div className="center">
            <div className="right"/>
        </div>
        <div className="between">
          <img src={require("../../images/drell.png")} alt="drell" />
        </div>
      </div>
    </BannerStyled>
  );
};

export default Banner;
