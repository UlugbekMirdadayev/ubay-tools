import React, { useRef, useCallback, useInsertionEffect, useMemo } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/products-slice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "./slider";
import Selectors from "../../redux/selectors";
import { isSelectedProduct, skeletionData } from "../../utils/constants";
import { FavoritesStyled } from "./style";
import locale from "../../localization/locale.json";

function Favorites() {
  const dispatch = useDispatch();
  const sliderRef = useRef();
  const { products } = Selectors.useProducts();
  const favorites = Selectors.useFavorites();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["favorites"], [lang]);

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
          dispatch(setProducts(data?.result));
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [dispatch, products?.length]);

  useInsertionEffect(() => {
    handleFilterProducts();
  }, []);

  const productsLiked = useMemo(
    () => products?.filter((product) => isSelectedProduct(product, favorites)),
    [products, favorites]
  );

  return (
    <FavoritesStyled>
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
                    favorites={favorites}
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
                  favorites={favorites}
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
    </FavoritesStyled>
  );
}

export default Favorites;
