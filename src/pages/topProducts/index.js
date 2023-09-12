import React, { useCallback, useEffect } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setProducts, setTopProducts } from "../../redux/products-slice";
import Slider from "./slider";
import Selectors from "../../redux/selectors";
import { skeletionData } from "../../utils/constants";
import { WishesStyled } from "./style";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function TopProducts() {
  const dispatch = useDispatch();
  const lang = Selectors.useLang();
  const { pathname } = useLocation();
  const { topProducts, products } = Selectors.useProducts();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();

  const handleFilterProducts = useCallback(
    (filter) => {
      if (filter && topProducts?.length) return;
      if (!filter && products?.length) return;
      api
        .get_products({
          sort: "desc",
          limit: 50,
        })
        .then(({ data }) => {
          if (data?.length) {
            filter
              ? dispatch(
                  setTopProducts(
                    data?.filter((prod) => prod?.inStock && prod?.filter === 0)
                  )
                )
              : dispatch(setProducts(data?.filter((prod) => prod?.inStock)));
          } else {
            filter ? dispatch(setTopProducts([])) : dispatch(setProducts([]));
            console.log(data);
          }
        })
        .catch(({ message }) => {
          toast.error(message);
          console.log(message);
        });
    },
    [dispatch, topProducts?.length, products?.length]
  );

  useEffect(() => {
    handleFilterProducts(pathname === "/top-products");
  }, [handleFilterProducts, pathname]);

  return (
    <WishesStyled>
      <h1 className="title">
        {pathname === "/top-products"
          ? lang === "uz"
            ? "TOP mahsulotlar"
            : "TOP продукты"
          : lang === "uz"
          ? "Barcha mahsulotlar"
          : "Все продукты"}
      </h1>
      <div className="flex">
        <div className="motorcycle_cultivator">
          {(pathname === "/top-products" ? topProducts : products)?.length
            ? (pathname === "/top-products" ? topProducts : products)?.map(
                (product) => (
                  <div
                    key={product?._id}
                    className="motorcycle_cultivator_card"
                  >
                    <Slider
                      wishes={wishes}
                      cartItems={cartItems}
                      compareItems={compareItems}
                      dispatch={dispatch}
                      product={product}
                    />
                  </div>
                )
              )
            : skeletionData.categories.map((key) => (
                <div key={key} className="motorcycle_cultivator_card isLoading">
                  <Slider
                    wishes={wishes}
                    cartItems={cartItems}
                    compareItems={compareItems}
                    dispatch={dispatch}
                    product={{}}
                  />
                </div>
              ))}
        </div>
      </div>
    </WishesStyled>
  );
}

export default TopProducts;
