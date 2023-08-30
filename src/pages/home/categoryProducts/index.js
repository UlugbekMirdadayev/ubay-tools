import React, { Fragment, useCallback, useEffect } from "react";
import { StyledSalesHits } from "./styles";
import { api } from "../../../api";
import { useDispatch } from "react-redux";
import { setProducts } from "../../../redux/products-slice";
import Slider from "./slider";
import Selectors from "../../../redux/selectors";
import { API, skeletionData } from "../../../utils/constants";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function CategoryProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = Selectors.useProducts();
  const slider = Selectors.useSlider();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();

  const handleFilterProducts = useCallback(() => {
    if (products?.length) return;
    api
      .get_products({
        sort: "desc",
        limit: 10,
      })
      .then(({ data }) => {
        if (data?.length) {
          dispatch(setProducts(data?.filter((prod) => prod?.inStock)));
        } else {
          console.log(data);
          dispatch(setProducts([]));
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

  return (
    <StyledSalesHits>
      {slider
        ?.filter((slide) => slide.sliderType !== 1)
        ?.map((slide) => (
          <Fragment key={slide?._id}>
            {products?.length ? (
              <Link to={`/banner/${slide?._id}`}>
                <img
                  onClick={() => navigate()}
                  src={`${API.baseURL_IMAGE}${slide.image}`}
                  alt={"category_image"}
                  className="full-image"
                />
              </Link>
            ) : (
              <div className="full-image isLoading" />
            )}
            <div className="flex">
              <div className="motorcycle_cultivator flex_row">
                {products?.length
                  ? products?.map((product) => (
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
                    ))
                  : skeletionData.categories.map((key) => (
                      <div
                        key={key}
                        className="motorcycle_cultivator_card flex_row isLoading"
                      >
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
          </Fragment>
        ))}
    </StyledSalesHits>
  );
}

export default CategoryProducts;
