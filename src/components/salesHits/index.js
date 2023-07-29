import React, { useState, useRef } from "react";
import { Change, Like } from "../icon";
import { StyledSalesHits } from "./styles";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loading-slice";
import { setTopProducts } from "../../redux/products-slice";
import { API, currencyString } from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function SalesHits({ lang, langData }) {
  const dispatch = useDispatch();
  const categories = Selectors.useCategories();
  const { topProducts } = Selectors.useProducts();
  const sliderRef = useRef();
  const [active, setActive] = useState(null);

  const topCategories = [...categories]?.reverse();

  const handleFilterProducts = (sub_ident) => {
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
  };

  const isActiveCategory = topCategories?.find(({ ident }) => ident === active);
  return (
    <StyledSalesHits>
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
            {category[lang === "uz" ? "iconfile" : "name"] || category?.ident}
          </button>
        ))}
      </div>
      <Swiper
        ref={sliderRef}
        slidesPerView={"auto"}
        className="motorcycle_cultivator"
      >
        {topProducts?.map((product) => (
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
              <h2>{product?.name}</h2>
              <Link
                className="link-category"
                to={`/category/${isActiveCategory?.ident}`}
              >
                {isActiveCategory[lang === "uz" ? "iconfile" : "name"] ||
                  isActiveCategory?.ident}
              </Link>
              <h1>{currencyString(product?.main_price)}</h1>
              <div className="motorcycle_cultivator_cart">
                <button className="button">В корзину</button>
                <button className="compare-btn">
                  <Change />
                </button>
              </div>
              <div className="like_button">
                <Like />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSalesHits>
  );
}

export default SalesHits;
