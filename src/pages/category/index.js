import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CategotyStyled } from "./style";
import { useParams } from "react-router-dom";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import locale from "../../localization/locale.json";
import Sidebar from "../../components/sidebar";
import { ScrollAreaView } from "../home/style";
import { setLoading } from "../../redux/loading-slice";
import { setSubCategories } from "../../redux/categories-slice";
import Slider from "../home/categoryProducts/slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { skeletionData } from "../../utils/constants";
import { toast } from "react-toastify";

const Categoty = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const lang = Selectors.useLang();
  const { isLoading } = Selectors.useLoading();
  const { sub_categories } = Selectors.useCategories();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const langData = useMemo(() => locale[lang]["home"], [lang]);
  const [isCategory, setIsCategory] = useState({});
  const [products, setProducts] = useState([]);

  const handleGetProducts = useCallback(
    (sub_ident) => {
      dispatch(setLoading(true));
      api
        .get_products({
          show_products: { main_ident: 0, sub_ident },
        })
        .then(({ data }) => {
          dispatch(setLoading(false));
          if (data?.res_id === 200) {
            setProducts(data?.result);
          } else {
            setProducts([]);
          }
        })
        .catch((err) => {
          dispatch(setLoading(false));
          console.log(err, "error");
        });
    },
    [dispatch]
  );

  const handleGetSubcategory = useCallback(() => {
    if (sub_categories?.length) return dispatch(setLoading(false));
    dispatch(setLoading(true));
    api
      .get_sub_category({ sub_catalog: {} })
      .then(({ data }) => {
        dispatch(setLoading(false));
        if (data?.res_id === 200) {
          dispatch(setSubCategories(data?.result));
        } else {
          toast.error(data?.mess);
        }
      })
      .catch(({ message }) => {
        dispatch(setLoading(false));
        toast.error(message);
        console.log(message);
      });
  }, [dispatch, sub_categories?.length]);

  useEffect(() => {
    dispatch(setLoading(true));
    api
      .get_category({ sub_catalog_one: { ident: id } })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          setIsCategory(data?.result);
          handleGetSubcategory();
          handleGetProducts(+id);
        } else {
          dispatch(setLoading(false));
          console.log(data);
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.log(err);
      });
  }, [id, handleGetSubcategory, handleGetProducts, dispatch]);

  return (
    <CategotyStyled>
      <Sidebar categoryId={id} lang={lang} langData={langData.sidebar} />
      <ScrollAreaView>
        <h1>{isCategory.name}</h1>
        <Swiper slidesPerView={"auto"} className="motorcycle_cultivator">
          {isLoading ? (
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
          ) : products.length ? (
            products?.map((product) => (
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
            <h1>{langData.empty_products}</h1>
          )}
        </Swiper>
      </ScrollAreaView>
    </CategotyStyled>
  );
};

export default Categoty;
