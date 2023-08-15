import { useState } from "react";
import { api } from "../../../api";
import {
  API,
  currencyString,
  isSelectedProduct,
} from "../../../utils/constants";
import { setLiked } from "../../../redux/wishes-slice";
import { setCompare } from "../../../redux/compare-slice";
import {
  setCart,
  setCartAddCount,
  setCartRemoveCount,
} from "../../../redux/cart-slice";
import { Change, Like, MinusIcon, PlusIcon } from "../../../components/icon";
import { Link } from "react-router-dom";

const Slider = ({ product, dispatch, wishes, cartItems, compareItems }) => {
  const handleWishes = (product) => {
    dispatch(setLiked(product?.ident));
  };

  const handleCompare = (product) => {
    dispatch(setCompare(product?.ident));
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

  const [rating, setRating] = useState(product?.rating);

  const [isLoading, setIsLoading] = useState(false);

  const setProductRating = (pro_ident, star) => {
    if (isLoading) return null;
    if (star === rating) {
      if (star === 1) {
        star = 0;
      } else {
        return null;
      }
    }
    setIsLoading(true);
    api
      .set_products_rating({
        product_rating: { pro_ident, rating: star },
      })
      .then(({ data }) => {
        setIsLoading(false);
        if (data?.res_id === 200) {
          setRating(star);
        } else {
          console.log(data, "response data");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err, "err set products rating");
      });
  };

  return product?.ident ? (
    <div className={`hover_body ${isLoading ? "isLoading" : ""}`}>
      <Link to={`/product/${product?.ident}`}>
        <img src={API.baseURL_IMAGE + product?.photo} alt={product?.name} />
      </Link>
      <Link to={`/product/${product?.ident}`}>
        <h2>{product?.name}</h2>
      </Link>

      <div className="link-category">
        {["★", "★", "★", "★", "★"].map((start, index) => (
          <span
            key={index}
            onClick={() => setProductRating(product?.ident, index + 1)}
            style={{
              color: index + 1 <= rating ? "rgb(255, 215, 0)" : "#000",
            }}
          >
            {start}
          </span>
        ))}
      </div>
      <h1>{currencyString(product?.main_price)}</h1>
      <div className="motorcycle_cultivator_cart">
        <button
          onClick={() =>
            isSelectedProduct(product, cartItems) ? null : handleCart(product)
          }
          className="button"
        >
          {isSelectedProduct(product, cartItems) ? (
            <>
              <span onClick={() => handleCartRemoveCount(product)}>
                <MinusIcon />
              </span>
              <span>{isSelectedProduct(product, cartItems)?.cart_count}</span>
              <span onClick={() => handleCartAddCount(product)}>
                <PlusIcon />
              </span>
            </>
          ) : (
            "В корзину"
          )}
        </button>
        <button
          className={`compare-btn ${
            isSelectedProduct(product, compareItems) ? "selected" : ""
          }`}
          onClick={() => handleCompare(product)}
        >
          <Change color="#fff" />
        </button>
      </div>
      <div className="like_button" onClick={() => handleWishes(product)}>
        <Like liked={!!isSelectedProduct(product, wishes)} />
      </div>
    </div>
  ) : (
    <div className="hover_body isLoading" />
  );
};

export default Slider;
