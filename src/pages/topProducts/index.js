import React, { useCallback, useEffect } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setTopProducts } from "../../redux/products-slice";
import Slider from "./slider";
import Selectors from "../../redux/selectors";
import { skeletionData } from "../../utils/constants";
import { WishesStyled } from "./style";
import { toast } from "react-toastify";

function TopProducts() {
  const dispatch = useDispatch();
  const { topProducts } = Selectors.useProducts();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();

  const handleFilterProducts = useCallback(() => {
    if (topProducts?.length) return;
    api
      .get_products({
        sort: "desc",
        limit: 50,
      })
      .then(({ data }) => {
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
        toast.error(message);
        console.log(message);
      });
  }, [dispatch, topProducts?.length]);

  useEffect(() => {
    handleFilterProducts();
  }, [handleFilterProducts]);

  return (
    <WishesStyled>
      <div className="flex">
        <div className="motorcycle_cultivator">
          {topProducts?.length
            ? topProducts?.map((product) => (
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
