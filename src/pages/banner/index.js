import React, { useEffect, useMemo, useState } from "react";
import { BannerStyled } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../utils/constants";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";
import { api } from "../../api";
import NotFound from "../../components/404";

const Banner = () => {
  const navigate = useNavigate();
  const [banner, setBanner] = useState({});
  const { id } = useParams();
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["banner"], [lang]);

  const params = useMemo(() => {
    const params_texts = (
      lang === "uz" ? banner?.footer_text_uz : banner?.footer_text
    )
      ?.split("\n")
      ?.map((text) =>
        text
          ?.split(":")
          ?.map((_, i) => (_ + (i === 0 ? ":" : ""))?.replaceAll(/\s/g, ""))
      );
    return [
      params_texts?.splice(0, params_texts?.length / 2),
      params_texts?.splice(params_texts?.length / 2 - 1),
    ];
  }, [lang, banner?.footer_text_uz, banner?.footer_text]);

  useEffect(() => {
    api
      .get_banner(id)
      .then(({ data }) => {
        setBanner(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return banner?._id ? (
    <BannerStyled>
      <div className="top_row">
        <div className="img_place">
          <img
            src={require("../../images/banner-top.png")}
            alt="banner_bg"
            className="banner_bg"
          />
          <img
            src={API.baseURL_IMAGE + banner?.image_header}
            className="prod_image"
            alt="prod"
          />
        </div>
        <div className="infos">
          <h1>{lang === "uz" ? banner?.title_uz : banner?.title}</h1>
          <p>
            <span>
              Ubay
              <br />
            </span>
            {lang === "uz" ? banner?.desc_header_uz : banner?.desc_header}
          </p>
          <div className="row_btn">
            {banner?.category && (
              <button
                className="primary"
                onClick={() => navigate(`/category/${banner?.category}`)}
              >
                {langData.buy}
              </button>
            )}
            {banner?.download ? (
              <a download={true} href={banner?.download}>
                <button>{langData.catalog_open}</button>
              </a>
            ) : (
              <button disabled>{langData.catalog_not_found}</button>
            )}
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
            src={API.baseURL_IMAGE + banner?.image_body}
            className="prod_image"
            alt="prod"
          />
        </div>
        <div className="infos">
          {/* <h3>Drill 907</h3> */}
          <p>{lang === "uz" ? banner?.body_text_uz : banner?.body_text}</p>
        </div>
      </div>
      <div className="threed_row">
        <div className="left">
          <div className="top">
            <div className="number">{banner?.center_x}</div>
            <div className="popup">
              {lang === "uz"
                ? banner?.center_battery_uz
                : banner?.center_battery}
            </div>
          </div>
          <div className="bottom">
            <div className="popup">
              {lang === "uz" ? banner?.center_title_uz : banner?.center_title}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <p>
              {lang === "uz" ? banner?.center_text_uz : banner?.center_text}
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
                src={API.baseURL_IMAGE + banner?.image_center}
                className="prod_image"
                alt="prod"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fourth_row">
        <div className="space">
          {params?.map((list, list_index) => (
            <ul key={list_index}>
              {list?.map((children, index) => (
                <li key={index}>
                  {children?.map((_, i) => (
                    <span key={i}>{_}</span>
                  ))}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="center">
          <div className="right" />
        </div>
        <div className="between">
          <img src={API.baseURL_IMAGE + banner?.image_footer} alt="drell" />
        </div>
      </div>
    </BannerStyled>
  ) : (
    <NotFound />
  );
};

export default Banner;
