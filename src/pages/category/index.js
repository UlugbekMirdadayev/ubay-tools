import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CategotyStyled } from "./style";
import { useParams } from "react-router-dom";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import locale from "../../localization/locale.json";
import Sidebar from "../../components/sidebar";
import { ScrollAreaView } from "../home/style";
import Slider from "../home/categoryProducts/slider";
import { skeletionData } from "../../utils/constants";

const Categoty = () => {
  const dispatch = useDispatch();
  const { main, seo } = useParams();
  const lang = Selectors.useLang();
  const { categories } = Selectors.useCategories();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const langData = useMemo(() => locale[lang]["home"], [lang]);
  const [isCategory, setIsCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetProducts = useCallback(() => {
    setLoading(true);
    const formData = {
      sort: "desc",
      limit: 50,
    };
    api
      .get_products(formData)
      .then(({ data }) => {
        setLoading(false);
        if (data?.length) {
          setProducts(data?.filter((prod) => prod?.inStock));
        } else {
          console.log(data);
          setProducts([]);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "error");
      });
  }, []);

  useEffect(() => {
    if (seo) {
      const category =
        categories
          ?.find((category) =>
            category?.children?.find((child) => child?.seo === seo)
          )
          ?.children?.find((child) => child?.seo === seo) || {};
      setIsCategory(category);
      setProductsFiltered(
        products?.filter((product) => product?.categories_id === category?._id)
      );
    } else {
      const category =
        categories?.find((category) => category?.seo === main) || {};
      setIsCategory(category);
      setProductsFiltered(
        products?.filter((product) =>
          category?.children?.find((child) => child?._id === product?.categories_id)
        )
      );
    }
  }, [seo, main, categories, products]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  return (
    <CategotyStyled>
      <Sidebar
        categoryId={seo}
        lang={lang}
        langData={langData.sidebar}
        loading={loading}
      />
      <ScrollAreaView>
        <h1>
          {loading
            ? null
            : lang === "uz"
            ? isCategory?.title_uz
            : isCategory?.title}
        </h1>
        <div className={`motorcycle_cultivator`}>
          {loading ? (
            skeletionData.categories.map((key) => (
              <div key={key} className="motorcycle_cultivator_card isLoading">
                <Slider
                  wishes={wishes}
                  cartItems={cartItems}
                  compareItems={compareItems}
                  dispatch={dispatch}
                  product={{}}
                />
              </div>
            ))
          ) : productsFiltered?.length ? (
            productsFiltered?.map((product) => (
              <div key={product?._id} className="motorcycle_cultivator_card">
                <Slider
                  wishes={wishes}
                  cartItems={cartItems}
                  compareItems={compareItems}
                  dispatch={dispatch}
                  product={product}
                />
              </div>
            ))
          ) : (
            <h1>{langData.empty_products}</h1>
          )}
        </div>
      </ScrollAreaView>
    </CategotyStyled>
  );
};

export default Categoty;
