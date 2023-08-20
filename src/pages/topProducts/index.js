import React, { useRef, useCallback, useEffect } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setTopProducts } from "../../redux/products-slice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "./slider";
import Selectors from "../../redux/selectors";
import { skeletionData } from "../../utils/constants";
import { WishesStyled } from "./style";
import { toast } from "react-toastify";

function TopProducts() {
  const dispatch = useDispatch();
  const sliderRef = useRef();
  const { topProducts } = Selectors.useProducts();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();

  const handleFilterProducts = useCallback(() => {
    api
      .get_top_products({ product_top: {} })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          dispatch(setTopProducts(data?.result));
        } else {
          dispatch(setTopProducts(data?.result));
          toast.error(data?.mess);
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [dispatch]);

  useEffect(() => {
    handleFilterProducts();
  }, [handleFilterProducts]);

  return (
    <WishesStyled>
      <div className="flex">
        <Swiper
          ref={sliderRef}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {topProducts?.length
            ? topProducts?.map((product) => (
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
    </WishesStyled>
  );
}

export default TopProducts;
