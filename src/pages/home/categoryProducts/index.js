import React, { useRef, useEffect, useCallback } from "react";
import { StyledSalesHits } from "./styles";
import { api } from "../../../api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/loading-slice";
import { setProducts } from "../../../redux/products-slice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "./slider";
import Selectors from "../../../redux/selectors";

function CategoryProducts() {
  const dispatch = useDispatch();
  const sliderRef = useRef();
  const { products } = Selectors.useProducts();

  const handleFilterProducts = useCallback(() => {
    dispatch(setLoading(true));
    api
      .get_products({
        show_products: { main_ident: 0, sub_ident: 0 },
      })
      .then(({ data }) => {
        dispatch(setLoading(false));
        if (data?.res_id === 200) {
          dispatch(setProducts(data?.result));
        } else {
          dispatch(setProducts(data?.result));
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.log(err, "error");
      });
  }, [dispatch]);

  useEffect(() => {
    handleFilterProducts();
  }, [handleFilterProducts]);

  return (
    <StyledSalesHits>
      <img
        src={
          "https://api.ubaytools.com/Images/78f97b080b2825453b7fe926d5675b5f.png"
        }
        alt={"category_image"}
        className="full-image"
      />
      <div className="flex">
        <Swiper
          ref={sliderRef}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {products?.map((product) => (
            <SwiperSlide
              key={product?.ident}
              className="motorcycle_cultivator_card"
            >
              <Slider dispatch={dispatch} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img
        src={
          "https://api.ubaytools.com/Images/ff2a72d3ab82f271303ba3eec173531c.png"
        }
        alt={"category_image"}
        className="full-image"
      />
      <div className="flex">
        <Swiper
          ref={sliderRef}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {products?.map((product) => (
            <SwiperSlide
              key={product?.ident}
              className="motorcycle_cultivator_card"
            >
              <Slider dispatch={dispatch} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledSalesHits>
  );
}

export default CategoryProducts;
