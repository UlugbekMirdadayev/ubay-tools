import React, { useState, useRef, useEffect, useCallback } from "react";
import { Change, Like, MinusIcon, PlusIcon } from "../../../components/icon";
import { StyledSalesHits } from "./styles";
import Selectors from "../../../redux/selectors";
import { api } from "../../../api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/loading-slice";
import { setTopProducts } from "../../../redux/products-slice";
import { API, currencyString } from "../../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { setLiked } from "../../../redux/favorites-slice";
import {
  setCart,
  setCartAddCount,
  setCartRemoveCount,
} from "../../../redux/cart-slice";
import { setCompare } from "../../../redux/compare-slice";

function SalesHits({ lang, langData }) {
  const dispatch = useDispatch();
  const categories = Selectors.useCategories();
  const favorites = Selectors.useFavorites();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const { topProducts } = Selectors.useProducts();
  const sliderRef = useRef();
  const [active, setActive] = useState(null);

  const topCategories = [...categories]?.splice(0, 5);

  const handleFilterProducts = useCallback(
    (sub_ident) => {
      setActive(sub_ident);
      dispatch(setLoading(true));
      api
        .get_products({
          show_products: { main_ident: 0, sub_ident },
        })
        .then(({ data }) => {
          dispatch(setLoading(false));
          if (data?.res_id === 200) {
            dispatch(setTopProducts(data?.result));
          } else {
            dispatch(setTopProducts(data?.result));
          }
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err, "error");
        });
    },
    [dispatch]
  );

  useEffect(() => {
    if (topCategories?.length && !active) {
      handleFilterProducts(topCategories[0]?.ident);
    }
  }, [topCategories, active, handleFilterProducts]);

  const isSelectedProduct = (product, arrayList) =>
    arrayList.find(({ ident }) => ident === product?.ident);

  const isActiveCategory = topCategories?.find(({ ident }) => ident === active);

  const handleFavorite = (product) => {
    dispatch(setLiked(product));
  };

  const handleCompare = (product) => {
    dispatch(setCompare(product));
  };

  const handleCart = (product) => {
    dispatch(setCart(product));
  };

  const handleCartAddCount = (product) => {
    dispatch(setCartAddCount(product));
  };

  const handleCartRemoveCount = (product) => {
    dispatch(setCartRemoveCount(product));
  };

  return (
    <StyledSalesHits>
      <div className="flex">
        <div className="sales">
          <h1>{langData.sales_hits.title}</h1>
          <p>{langData.sales_hits.text}</p>
          {topCategories?.map((category) => (
            <button
              onClick={() =>
                category?.ident === active
                  ? null
                  : handleFilterProducts(category?.ident)
              }
              className={active === category?.ident ? "active" : null}
              key={category?.ident}
            >
              {category[lang === "uz" ? "name_uz" : "name"] || category?.ident}
            </button>
          ))}
        </div>
        <Swiper
          ref={sliderRef}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {isActiveCategory?.name
            ? topProducts?.map((product) => (
                <SwiperSlide
                  key={product?.ident}
                  className="motorcycle_cultivator_card"
                >
                  <div className="hover_body">
                    <Link to={`/product/${product?.ident}`}>
                      <img
                        src={API.baseURL_IMAGE + product?.photo}
                        alt={product?.name}
                      />
                    </Link>
                    <Link to={`/product/${product?.ident}`}>
                      <h2>{product?.name}</h2>
                    </Link>

                    <Link
                      className="link-category"
                      to={`/category/${isActiveCategory?.ident}`}
                    >
                      {isActiveCategory[lang === "uz" ? "name_uz" : "name"] ||
                        isActiveCategory?.ident}
                    </Link>
                    <h1>{currencyString(product?.main_price)}</h1>
                    <div className="motorcycle_cultivator_cart">
                      <button
                        onClick={() =>
                          isSelectedProduct(product, cartItems)
                            ? null
                            : handleCart(product)
                        }
                        className="button"
                      >
                        {isSelectedProduct(product, cartItems) ? (
                          <>
                            <span
                              onClick={() => handleCartRemoveCount(product)}
                            >
                              <MinusIcon />
                            </span>
                            <span>
                              {
                                isSelectedProduct(product, cartItems)
                                  ?.cart_count
                              }
                            </span>
                            <span onClick={() => handleCartAddCount(product)}>
                              <PlusIcon />
                            </span>
                          </>
                        ) : (
                          "В корзину"
                        )}
                      </button>
                      <button
                        className={`compare-btn ${
                          isSelectedProduct(product, compareItems)
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => handleCompare(product)}
                      >
                        <Change color="#fff" />
                      </button>
                    </div>
                    <div
                      className="like_button"
                      onClick={() => handleFavorite(product)}
                    >
                      <Like liked={!!isSelectedProduct(product, favorites)} />
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
      <Link to={"/top-products"} className="show_all">
        {langData.show_all}
      </Link>
    </StyledSalesHits>
  );
}

export default SalesHits;
