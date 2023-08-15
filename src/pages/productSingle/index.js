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
import { API, currencyString, isSelectedProduct } from "../../utils/constants";
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

const ProductSingle = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = useMemo(() => Number(params?.id), [params?.id]);
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
  const [products, setProducts] = useState([]);
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
      .get_products_single({ view_product: { pro_ident: id } })
      .then(({ data }) => {
        if (data.res_id === 200) {
          setData(data.result[0]);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleWishes = () => {
    dispatch(setLiked(id));
  };

  const handleCart = () => {
    dispatch(setCart({ ident: id }));
  };

  const handleCartAddCount = () => {
    dispatch(setCartAddCount({ ident: id }));
  };

  const handleCartRemoveCount = () => {
    dispatch(setCartRemoveCount({ ident: id }));
  };

  useEffect(() => {
    getProduct();
  }, [id, getProduct]);

  useEffect(() => {
    if (data?.sub_ident) {
      api
        .get_products({
          show_products: { main_ident: 0, sub_ident: data?.sub_ident },
        })
        .then(({ data }) => {
          if (data?.res_id === 200) {
            setProducts(data?.result);
          } else {
            console.log(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [data?.sub_ident]);

  return (
    <ProductStyled>
      <h1 className="title_prod">
        {data[lang === "uz" ? "title_uz" : "sub_name"]}
      </h1>
      <div className="row_main">
        <div className="slider_column">
          <Swiper
            ref={sliderRef}
            onSlideChange={({ activeIndex }) => handleChangeSlide(activeIndex)}
            className="slider"
            slidesPerView={1}
          >
            {data?.photos?.length ? (
              data?.photos?.map((item, key) => (
                <SwiperSlide key={key}>
                  <img
                    className="slider_image"
                    src={API.baseURL_IMAGE + item?.image}
                    alt={item?.caption}
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <img src={API.baseURL_IMAGE + data?.photo} alt={data?.name} />
              </SwiperSlide>
            )}
          </Swiper>
          <div className="pagination">
            <button className="prev btn-ctrl" onClick={handlePrev}>
              <Arrow />
            </button>
            <Swiper ref={paginationRef} slidesPerView={"auto"} spaceBetween={5}>
              {data?.photos?.length
                ? data?.photos?.map((item, key) => (
                    <SwiperSlide
                      key={key}
                      className={`pagination-btn ${
                        active === key ? "slide-active" : ""
                      }`}
                    >
                      <button onClick={() => handleChangeSlide(key)}>
                        <img
                          src={API.baseURL_IMAGE + item?.image}
                          alt={item?.caption}
                        />
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
            {data?.parametrs?.map((params) => (
              <li key={params.parametr_ident}>
                <span className="key">
                  {params[lang === "uz" ? "comment" : "name"] || ""}
                </span>
                <span className="value">{params?.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            className={`add_wishes ${
              isSelectedProduct({ ident: id }, wishes) ? "active" : ""
            }`}
            onClick={handleWishes}
          >
            <Like
              color="#015CCF"
              liked={!!isSelectedProduct({ ident: id }, wishes)}
            />
            <span>{langData.add_wishes}</span>
          </button>
          <div className="cart_card">
            <div className="price">{currencyString(data?.main_price)}</div>
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
                  isSelectedProduct({ ident: id }, cartItems)?.cart_count
                    ? "active"
                    : ""
                }`}
                onClick={
                  isSelectedProduct({ ident: id }, cartItems)?.cart_count
                    ? null
                    : handleCart
                }
              >
                {isSelectedProduct({ ident: id }, cartItems)?.cart_count ? (
                  <>
                    <span onClick={handleCartRemoveCount}>
                      <MinusIcon />
                    </span>
                    <input
                      type="number"
                      value={
                        isSelectedProduct({ ident: id }, cartItems)?.cart_count
                      }
                      readOnly
                    />
                    <span
                      onClick={
                        isSelectedProduct({ ident: id }, cartItems)
                          ?.cart_count < data?.count
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
              <button>
                <span>{langData.buy_now}</span>
              </button>
            </div>
            <div className="count">
              <span>{langData.count.replace("{{count}}", data?.count)}</span>
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
                  color:
                    index + 1 <= data?.rating ? "rgb(255, 215, 0)" : "#000",
                }}
              >
                {start}
              </span>
            ))}
          </div>
        </div>
        <div className="text">
          {data[`delivery${lang === "uz" ? "_uz" : ""}`]}
        </div>
      </div>
      <div className="products">
        <Swiper
          ref={prodSlider}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {products?.map((product) => (
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
