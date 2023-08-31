import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { Change, Like, MinusIcon, PlusIcon } from "../../../components/icon";
import { StyledSalesHits } from "./styles";
import Selectors from "../../../redux/selectors";
import { api } from "../../../api";
import { useDispatch } from "react-redux";
import { setTopProducts } from "../../../redux/products-slice";
import {
  API,
  currencyString,
  isSelectedProduct,
  skeletionData,
} from "../../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { setLiked } from "../../../redux/wishes-slice";
import {
  setCart,
  setCartAddCount,
  setCartRemoveCount,
} from "../../../redux/cart-slice";
import { setCompare } from "../../../redux/compare-slice";
import { toast } from "react-toastify";

function SalesHits({ lang, langData }) {
  const dispatch = useDispatch();
  const { categories } = Selectors.useCategories();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const { topProducts } = Selectors.useProducts();
  const sliderRef = useRef();
  const [active, setActive] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const topCategories = useMemo(
    () => [...categories]?.filter((category) => category?.top)?.splice(0, 5),
    [categories]
  );

  const handleFilterProducts = useCallback(
    (sub_ident) => {
      if (!sub_ident || topProducts?.length) return;
      setActive(sub_ident);
      setLoading(true);
      api
        .get_products({
          sort: "desc",
          limit: 50,
        })
        .then(({ data }) => {
          setLoading(false);
          if (data?.length) {
            dispatch(
              setTopProducts(
                data?.filter((prod) => prod?.inStock && prod?.filter === 0)
              )
            );
          } else {
            dispatch(setTopProducts([]));
            console.log(data);
          }
        })
        .catch(({ message }) => {
          setLoading(false);
          toast.error(message);
          console.log(message);
        });
    },
    [dispatch, topProducts?.length]
  );

  const isActiveCategory = topCategories?.find(({ seo }) => seo === active);

  const filteredProducts = useMemo(
    () =>
      topProducts?.filter(
        (product) => product?.categories_id === isActiveCategory?._id
      ),
    [isActiveCategory, topProducts]
  );

  const handleWishes = (product) => {
    dispatch(setLiked(product?.seo));
  };

  const handleCompare = (product) => {
    dispatch(setCompare(product?.seo));
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

  useEffect(() => {
    handleFilterProducts(topCategories[0]?.seo);
  }, [handleFilterProducts, topCategories]);

  return (
    <StyledSalesHits>
      <div className="flex">
        <div className="sales">
          <h1>{langData.sales_hits.title}</h1>
          <p>{langData.sales_hits.text}</p>
          {topCategories?.length
            ? topCategories?.map((category) => (
                <button
                  onClick={() =>
                    category?.seo === active ? null : setActive(category?.seo)
                  }
                  className={active === category?.seo ? "active" : null}
                  key={category?.seo}
                >
                  {category[lang === "uz" ? "title_uz" : "title"] ||
                    category?.seo}
                </button>
              ))
            : skeletionData.slider.map((key) => (
                <button key={key} className="isLoading empty-btn" />
              ))}
        </div>
        {isLoading ? null : !filteredProducts?.length ? (
          <h1>{langData.empty_products}</h1>
        ) : null}
        <Swiper
          ref={sliderRef}
          slidesPerView={"auto"}
          className="motorcycle_cultivator"
        >
          {isLoading
            ? skeletionData.slider.map((key) => (
                <SwiperSlide
                  key={key}
                  className="motorcycle_cultivator isLoading"
                />
              ))
            : filteredProducts?.map((product) => (
                <SwiperSlide
                  key={product?.seo}
                  className="motorcycle_cultivator_card"
                >
                  <div className="hover_body">
                    <Link to={`/product/${product?.seo}`}>
                      <img
                        src={API.baseURL_IMAGE + product?.images}
                        alt={product?.title}
                      />
                    </Link>
                    <Link to={`/product/${product?.seo}`}>
                      <h2>
                        {lang === "uz"
                          ? product?.title_uz || product?.title
                          : product?.title}
                      </h2>
                    </Link>

                    <Link
                      className="link-category"
                      to={`/category/${isActiveCategory?.seo}`}
                    >
                      {lang === "uz"
                        ? isActiveCategory?.title_uz
                        : isActiveCategory?.title}
                    </Link>
                    <h1>{currencyString(product?.price)}</h1>
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
                        ) : lang === "uz" ? (
                          "Savatga"
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
                      onClick={() => handleWishes(product)}
                    >
                      <Like liked={!!isSelectedProduct(product, wishes)} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <Link to={"/top-products"} className="show_all">
        {langData.show_all}
      </Link>
    </StyledSalesHits>
  );
}

export default SalesHits;
