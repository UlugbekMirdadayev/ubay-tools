import {
  API,
  currencyString,
  isSelectedProduct,
} from "../../utils/constants";
import { setLiked } from "../../redux/wishes-slice";
import { setCompare } from "../../redux/compare-slice";
import {
  setCart,
  setCartAddCount,
  setCartRemoveCount,
} from "../../redux/cart-slice";
import { Change, Like, MinusIcon, PlusIcon } from "../../components/icon";
import { Link } from "react-router-dom";
import Selectors from "../../redux/selectors";

const Slider = ({ product, dispatch, wishes, cartItems, compareItems }) => {
  const lang = Selectors.useLang();
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

  return product?.seo ? (
    <div className={`hover_body`}>
      <Link to={`/product/${product?.seo}`}>
        <img src={API.baseURL_IMAGE + product?.images} alt={product?.title} />
      </Link>
      <Link to={`/product/${product?.seo}`}>
        <h2>
          {lang === "uz" ? product?.title_uz || product?.title : product?.title}
        </h2>
      </Link>

      <div className="link-category">
        {["★", "★", "★", "★", "★"].map((start, index) => (
          <span
            key={index}
            style={{
              color: index + 1 <= product?.grade ? "rgb(255, 215, 0)" : "#000",
            }}
          >
            {start}
          </span>
        ))}
      </div>
      <h1>{currencyString(product?.price)}</h1>
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
          ) : lang === "uz" ? (
            "Savatga"
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
