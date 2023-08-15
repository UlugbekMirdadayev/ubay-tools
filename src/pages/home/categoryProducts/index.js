import React, { useRef, useCallback, useInsertionEffect } from "react";
import { StyledSalesHits } from "./styles";
import { api } from "../../../api";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../redux/products-slice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "./slider";
import Selectors from "../../../redux/selectors";
import { skeletionData } from "../../../utils/constants";

function CategoryProducts() {
  const dispatch = useDispatch();
  const sliderRef = useRef();
  const { products } = Selectors.useProducts();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();

  const handleFilterProducts = useCallback(() => {
    api
      .get_products({
        show_products: { main_ident: 0, sub_ident: 0 },
      })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          dispatch(setProducts(data?.result));
        } else {
          dispatch(setProducts(data?.result));
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [dispatch]);

  useInsertionEffect(() => {
    handleFilterProducts();
  }, []);

  return (
    <StyledSalesHits>
      {products?.length ? (
        <img
          src={
            "https://api.ubaytools.com/Images/78f97b080b2825453b7fe926d5675b5f.png"
          }
          alt={"category_image"}
          className="full-image"
        />
      ) : (
        <div className="full-image isLoading" />
      )}
      <div className="flex">
        <Swiper
          ref={sliderRef}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {products?.length
            ? products?.map((product) => (
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
              ))
            : skeletionData.categories.map((key) => (
                <SwiperSlide
                  key={key}
                  className="motorcycle_cultivator_card isLoading"
                >
                  <Slider
                    wishes={wishes}
                    cartItems={cartItems}
                    compareItems={compareItems}
                    dispatch={dispatch}
                    product={{}}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      {products?.length ? (
        <img
          src={
            "https://api.ubaytools.com/Images/ff2a72d3ab82f271303ba3eec173531c.png"
          }
          alt={"category_image"}
          className="full-image"
        />
      ) : (
        <div className="full-image isLoading" />
      )}
      <div className="flex">
        <Swiper
          ref={sliderRef}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {products?.length
            ? products?.map((product) => (
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
              ))
            : skeletionData.categories.map((key) => (
                <SwiperSlide
                  key={key}
                  className="motorcycle_cultivator_card isLoading"
                >
                  <Slider
                    wishes={wishes}
                    cartItems={cartItems}
                    compareItems={compareItems}
                    dispatch={dispatch}
                    product={{}}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </StyledSalesHits>
  );
}

export default CategoryProducts;
