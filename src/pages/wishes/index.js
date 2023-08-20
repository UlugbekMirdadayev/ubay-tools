import React, { useRef, useCallback, useEffect, useMemo } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/products-slice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "./slider";
import Selectors from "../../redux/selectors";
import { isSelectedProduct, skeletionData } from "../../utils/constants";
import { WishesStyled } from "./style";
import locale from "../../localization/locale.json";
import { toast } from "react-toastify";

function WishesScreen() {
  const dispatch = useDispatch();
  const sliderRef = useRef();
  const { products } = Selectors.useProducts();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["wishes"], [lang]);

  const handleFilterProducts = useCallback(() => {
    if (products?.length) return null;
    api
      .get_products({
        show_products: { main_ident: 0, sub_ident: 0 },
      })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          dispatch(setProducts(data?.result));
        } else {
          console.log(data);
          toast.error(data.mess);
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [dispatch, products?.length]);

  useEffect(() => {
    handleFilterProducts();
  }, [handleFilterProducts]);

  const productsLiked = useMemo(
    () => products?.filter((product) => isSelectedProduct(product, wishes)),
    [products, wishes]
  );

  return (
    <WishesStyled>
      <h1 className="title">{langData.title}</h1>
      <div className="flex">
        <Swiper
          ref={sliderRef}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {products?.length ? (
            productsLiked?.length ? (
              productsLiked?.map((product) => (
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
            ) : (
              <p className="empty_text">{langData.empty_text}</p>
            )
          ) : (
            skeletionData.categories.map((key) => (
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
            ))
          )}
        </Swiper>
      </div>
    </WishesStyled>
  );
}

export default WishesScreen;
