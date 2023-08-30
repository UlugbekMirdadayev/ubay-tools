import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BannerStyled } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../utils/constants";
import Selectors from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setSlider } from "../../redux/slider-slice";
import { api } from "../../api";
import locale from "../../localization/locale.json";

const Banner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sliderData = Selectors.useSlider();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["banner"], [lang]);

  const data = useMemo(() => {
    const slider = sliderData.find((slider) => slider?._id === id);
    const productID = slider?.value?.split("/product/")[1];
    return { slider, productID };
  }, [id, sliderData]);

  const getSliderData = useCallback(() => {
    if (sliderData?.length) return;
    api
      .get_sliders()
      .then(({ data }) => {
        if (data?.length) {
          dispatch(setSlider(data));
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [dispatch, sliderData?.length]);

  const getProduct = useCallback(() => {
    if (!data?.productID) return;
    api
      .get_products_single({ view_product: { pro_ident: data?.productID } })
      .then(({ data }) => {
        if (data.res_id === 200) {
          setProduct(data.result[0]);
        } else {
          toast.error(data?.mess);
          console.log(data);
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [data?.productID]);

  useEffect(() => {
    getSliderData();
  }, [getSliderData]);

  useEffect(() => {
    getProduct();
  }, [getProduct, data?.productID]);

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
            src={API.baseURL_IMAGE + data?.slider?.image}
            className="prod_image"
            alt="prod"
          />
        </div>
        <div className="infos">
          <h1 title={data?.slider?.title}>{data?.slider?.title}</h1>
          <p>
            {/* <span>Ubey</span> */}
            {data?.slider?.description}
          </p>
          <div className="row_btn">
            <button
              className="primary"
              onClick={() =>
                data?.slider?.link
                  ? window.open(data?.slider?.link)
                  : toast.error("Invalid link")
              }
            >
              {langData.buy}
            </button>
            <button
              onClick={() =>
                data?.slider?.categories_id
                  ? navigate(`/category/${data?.slider?.categories_id}`)
                  : toast.error("invalid category")
              }
            >
              {langData.catalog_open}
            </button>
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
            src={API.baseURL_IMAGE + data?.slider?.image}
            className="prod_image"
            alt="prod"
          />
        </div>
        <div className="infos">
          <h3>{product?.main_name}</h3>
          <p>{product?.delivery}</p>
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
            <p>{product.sub_name}</p>
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
            {product?.parametrs?.map((params, key) =>
              key >= product?.parametrs?.length / 2 ? null : (
                <li key={key}>
                  <span>
                    {params[lang === "uz" ? "comment" : "name"] || ""}
                  </span>
                  <span>{params?.value}</span>
                </li>
              )
            )}
          </ul>

          <ul>
            {product?.parametrs?.map((params, key) =>
              key < product?.parametrs?.length / 2 ? null : (
                <li key={key}>
                  <span>
                    {params[lang === "uz" ? "comment" : "name"] || ""}
                  </span>
                  <span>{params?.value}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="center">
          <div className="right" />
        </div>
        <div className="between">
          <img src={require("../../images/drell.png")} alt="drell" />
        </div>
      </div>
    </BannerStyled>
  );
};

export default Banner;
