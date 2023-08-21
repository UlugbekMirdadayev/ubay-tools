import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CategotyStyled } from "./style";
import { useParams } from "react-router-dom";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import locale from "../../localization/locale.json";
import Sidebar from "../../components/sidebar";
import { ScrollAreaView } from "../home/style";
import { setSubCategories } from "../../redux/categories-slice";
import Slider from "../home/categoryProducts/slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { skeletionData } from "../../utils/constants";
import { toast } from "react-toastify";

const Categoty = () => {
  const dispatch = useDispatch();
  const { id, main } = useParams();
  const lang = Selectors.useLang();
  const { sub_categories, categories } = Selectors.useCategories();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const langData = useMemo(() => locale[lang]["home"], [lang]);
  const [isCategory, setIsCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetProducts = useCallback(
    (sub_ident) => {
      setLoading(true);
      const formData = {
        show_products: main
          ? { main_ident: main, sub_ident }
          : { main_ident: sub_ident, sub_ident: 0 },
      };
      api
        .get_products(formData)
        .then(({ data }) => {
          setLoading(false);
          if (data?.res_id === 200) {
            setProducts(data?.result);
          } else {
            setProducts([]);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "error");
        });
    },
    [main]
  );

  const handleGetSubcategory = useCallback(() => {
    if (sub_categories?.length) return;
    api
      .get_sub_category({ sub_catalog: {} })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          dispatch(setSubCategories(data?.result));
        } else {
          toast.error(data?.mess);
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [dispatch, sub_categories?.length]);

  useEffect(() => {
    if (!main) {
      handleGetSubcategory();
      handleGetProducts(+id);
      setIsCategory(categories?.find((category) => category?.ident === +id));
      return;
    }
    api
      .get_category({ sub_catalog_one: { ident: id } })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          setIsCategory(data?.result);
          handleGetSubcategory();
          handleGetProducts(+id);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, handleGetSubcategory, categories, main, handleGetProducts]);

  return (
    <CategotyStyled>
      <Sidebar categoryId={id} lang={lang} langData={langData.sidebar} />
      <ScrollAreaView>
        <h1>{loading ? null : isCategory?.name}</h1>
        <Swiper slidesPerView={"auto"} className={`motorcycle_cultivator`}>
          {loading ? (
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
