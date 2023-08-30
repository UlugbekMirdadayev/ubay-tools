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
  const { seo, main } = useParams();
  const lang = Selectors.useLang();
  const { categories } = Selectors.useCategories();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const langData = useMemo(() => locale[lang]["home"], [lang]);
  const [isCategory, setIsCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetProducts = useCallback(() => {
    setLoading(true);
    const formData = {
      sort: "desc",
      limit: 10,
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
    if (!main) {
      handleGetProducts(seo);
      setIsCategory(categories?.find((category) => category?.seo === seo));
      return;
    }
    api
      .get_category({ sub_catalog_one: { seo: seo } })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          setIsCategory(data?.result);
          handleGetProducts(seo);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [seo, categories, main, handleGetProducts]);

  console.log({ main, seo });

  return (
    <CategotyStyled>
      <Sidebar
        categoryId={seo}
        lang={lang}
        langData={langData.sidebar}
        loading={loading}
      />
      <ScrollAreaView>
        <h1>{loading ? null : isCategory?.name}</h1>
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
          ) : products?.length ? (
            products?.map((product) => (
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
