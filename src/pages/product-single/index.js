import React, {
  useCallback,
  useState,
  useRef,
  useMemo,
  useEffect,
} from "react";
import { ProductStyled } from "./style";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  API,
  currencyString,
  goContact,
  isSelectedProduct,
} from "../../utils/constants";
import {
  Arrow,
  CarIcon,
  CartIconSecond,
  InfoIcon,
  Like,
  MedalIcon,
  MinusIcon,
  PlusIcon,
} from "../../components/icon";
import Selectors from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { setLiked } from "../../redux/wishes-slice";
import {
  setCart,
  setCartAddCount,
  setCartRemoveCount,
} from "../../redux/cart-slice";
import locale from "../../localization/locale.json";
import Slider from "../home/categoryProducts/slider";
import { toast } from "react-toastify";
import NotFound from "../../components/404";

const ProductSingle = () => {
  const dispatch = useDispatch();
  const { seo } = useParams();
  const [data, setData] = useState({});
  const [active, setActive] = useState(0);
  const [sliderRef, paginationRef, prodSlider] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const lang = Selectors.useLang();
  const cartItems = Selectors.useCart();
  const wishes = Selectors.useWishes();
  const compareItems = Selectors.useCompare();
  const langData = useMemo(() => locale[lang]["product_single"], [lang]);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current || !paginationRef.current) return;
    sliderRef.current?.swiper.slidePrev();
    paginationRef.current?.swiper.slidePrev();
  }, [paginationRef, sliderRef]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current || !paginationRef.current) return;
    sliderRef.current.swiper.slideNext();
    paginationRef.current.swiper.slideNext();
  }, [paginationRef, sliderRef]);

  const handleChangeSlide = useCallback(
    (index) => {
      if (!sliderRef.current || !paginationRef.current) return;
      sliderRef.current?.swiper.slideTo(index);
      paginationRef.current?.swiper.slideTo(index);
      setActive(index);
    },
    [paginationRef, sliderRef]
  );

  const getProduct = useCallback(() => {
    api
      .get_products_single(`?seo=${seo}`)
      .then(({ data }) => {
        if (data?.inStock && data?.isActive) {
          setData(data);
        } else {
          setData({ notFound: true });
        }
      })
      .catch(({ response: { data } }) => {
        setData({ notFound: true });
        console.log(data);
        toast.error(data?.message);
      });
  }, [seo]);

  const handleWishes = () => {
    dispatch(setLiked(seo));
  };

  const handleCart = () => {
    dispatch(setCart({ seo }));
  };

  const handleCartAddCount = () => {
    dispatch(setCartAddCount({ seo }));
  };

  const handleCartRemoveCount = () => {
    dispatch(setCartRemoveCount({ seo }));
  };

  useEffect(() => {
    getProduct();
  }, [seo, getProduct]);

  return data?.notFound ? (
    <NotFound />
  ) : (
    <ProductStyled>
      <h1 className="title_prod">
        {lang === "uz" ? data.title_uz || data.title : data.title}
      </h1>
      <div className="row_main">
        <div className="slider_column">
          <Swiper
            ref={sliderRef}
            onSlideChange={({ activeIndex }) => handleChangeSlide(activeIndex)}
            className="slider"
            slidesPerView={1}
          >
            {data?.images?.length ? (
              data?.images?.map((item, key) => (
                <SwiperSlide key={key}>
                  <img
                    className="slider_image"
                    src={API.baseURL_IMAGE + item}
                    alt={item}
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <img
                  src={
                    API.baseURL_IMAGE +
                    (data?.images?.length ? data?.images[0] : "")
                  }
                  alt={data?.title}
                />
              </SwiperSlide>
            )}
          </Swiper>
          <div className="pagination">
            <button className="prev btn-ctrl" onClick={handlePrev}>
              <Arrow />
            </button>
            <Swiper ref={paginationRef} slidesPerView={"auto"} spaceBetween={5}>
              {data?.images?.length
                ? data?.images?.map((item, key) => (
                    <SwiperSlide
                      key={key}
                      className={`pagination-btn ${
                        active === key ? "slide-active" : ""
                      }`}
                    >
                      <button onClick={() => handleChangeSlide(key)}>
                        <img src={API.baseURL_IMAGE + item} alt={item} />
                      </button>
                    </SwiperSlide>
                  ))
                : null}
            </Swiper>
            <button className="next btn-ctrl" onClick={handleNext}>
              <Arrow />
            </button>
          </div>
        </div>
        <div className="options scroll-custome">
          <ul>
            <li>{langData.params}</li>
            {data?.compare?.length
              ? data?.compare?.map((params, key) => (
                  <li key={key}>
                    <span className="key">
                      {params[`name_${lang === "uz" ? "uz" : "ru"}`] || ""}
                    </span>
                    <span className="value">
                      {params[`desc_${lang === "uz" ? "uz" : "ru"}`]}
                    </span>
                  </li>
                ))
              : ""}
          </ul>
        </div>
        <div>
          <button
            className={`add_wishes ${
              isSelectedProduct({ seo }, wishes) ? "active" : ""
            }`}
            onClick={handleWishes}
          >
            <Like
              color="#015CCF"
              liked={!!isSelectedProduct({ seo }, wishes)}
            />
            <span>{langData.add_wishes}</span>
          </button>
          <div className="cart_card">
            <div className="price">{currencyString(data?.price)}</div>
            <div className="info_row">
              <span className="desc">{langData.info_delivery}</span>
              <InfoIcon />
            </div>
            <div className="delivery">
              <div className="row">
                <CarIcon /> <span>{langData.standart_delivery}</span>
              </div>
              <div className="text">
                {langData.text_delivery}
                {/* {data[`delivery${lang === "uz" ? "_uz" : ""}`]} */}
              </div>
            </div>
            <div className="bottom_btns">
              <button
                className={`primary ${
                  isSelectedProduct({ seo }, cartItems)?.cart_count
                    ? "active"
                    : ""
                }`}
                onClick={
                  isSelectedProduct({ seo }, cartItems)?.cart_count
                    ? null
                    : handleCart
                }
              >
                {isSelectedProduct({ seo }, cartItems)?.cart_count ? (
                  <>
                    <span onClick={handleCartRemoveCount}>
                      <MinusIcon />
                    </span>
                    <input
                      type="number"
                      value={isSelectedProduct({ seo }, cartItems)?.cart_count}
                      readOnly
                    />
                    <span
                      onClick={
                        isSelectedProduct({ seo }, cartItems)?.cart_count <
                        data?.qty
                          ? handleCartAddCount
                          : null
                      }
                    >
                      <PlusIcon />
                    </span>
                  </>
                ) : (
                  <>
                    <CartIconSecond />
                    <span>{langData.add_cart}</span>
                  </>
                )}
              </button>
              <button onClick={goContact}>
                <span>{langData.buy_now}</span>
              </button>
            </div>
            <div className="count">
              <span>{langData.count.replace("{{count}}", data?.qty)}</span>
              <MedalIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="title">
          {langData.description}{" "}
          <div className="link-category">
            {["★", "★", "★", "★", "★"].map((start, index) => (
              <span
                key={index}
                style={{
                  color: index + 1 <= data?.grade ? "rgb(255, 215, 0)" : "#000",
                }}
              >
                {start}
              </span>
            ))}
          </div>
        </div>
        <div className="text scroll-custome">
          {data[`description${lang === "uz" ? "_uz" : ""}`]}
        </div>
      </div>
      <div className="products">
        <Swiper
          ref={prodSlider}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {data?.variant_products?.map((product) => (
            <SwiperSlide
              key={product?.ident}
              className="motorcycle_cultivator_card"
            >
              <Slider
                wishes={wishes}
                cartItems={cartItems}
                compareItems={compareItems}
                dispatch={dispatch}
                product={product}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ProductStyled>
  );
};

export default ProductSingle;
