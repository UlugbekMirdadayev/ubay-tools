import React, { useMemo, useCallback, useInsertionEffect } from "react";
import { CartStyled } from "./style";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";
import { API, currencyString, isSelectedProduct } from "../../utils/constants";
import { setProducts } from "../../redux/products-slice";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCompare } from "../../redux/compare-slice";
import {
  setCartAddCount,
  setCartRemoveCount,
  setRemoveCart,
} from "../../redux/cart-slice";
import {
  ClearIconRed,
  CompareIconSecond,
  Like,
  MinusIcon,
  PlusIcon,
} from "../../components/icon";
import { setLiked } from "../../redux/wishes-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const lang = Selectors.useLang();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const wishes = Selectors.useWishes();
  const { products } = Selectors.useProducts();
  const langData = useMemo(() => locale[lang]["cart"], [lang]);

  const handleFilterProducts = useCallback(() => {
    if (products?.length) return null;
    api
      .get_products({
        show_products: { main_ident: 0, sub_ident: 0 },
      })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          dispatch(setProducts(data?.result));
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [dispatch, products?.length]);

  useInsertionEffect(() => {
    handleFilterProducts();
  }, []);

  const productsInCart = useMemo(
    () => products?.filter((product) => isSelectedProduct(product, cartItems)),
    [products, cartItems]
  );

  const isProductCount = (product) =>
    isSelectedProduct(product, cartItems)?.cart_count;

  const handleCompare = (product) => {
    dispatch(setCompare(product?.ident));
  };

  const handleWishes = (product) => {
    dispatch(setLiked(product?.ident));
  };
  const handleCartAddCount = (product) => {
    dispatch(setCartAddCount(product));
  };

  const handleCartRemoveCount = (product) => {
    dispatch(setCartRemoveCount(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(setRemoveCart(product));
  };

  const total_infos = useMemo(() => {
    const array = products
      ?.filter((product) => isSelectedProduct(product, cartItems))
      .map((itemFiltered, key) => ({
        ...cartItems[key],
        ...itemFiltered,
      }));
    const total_summ = array.reduce(
      (currentSum, item) => currentSum + (item.main_price * item.cart_count),
      0
    );

    return { total_summ };
  }, [products, cartItems]);

  return (
    <CartStyled>
      <h1 className="title">{langData.title}</h1>
      {productsInCart?.length ? (
        <div className="grid">
          <div className="list">
            {productsInCart?.map((product) => (
              <div className="product" key={product.ident}>
                <div className="space">
                  <div className="image-box">
                    <img
                      src={API.baseURL_IMAGE + product?.photo}
                      alt={"product"}
                    />
                  </div>
                  <div className="infos">
                    <h3 className="name_prod">{product?.name}</h3>
                    <div className="stars">
                      {["★", "★", "★", "★", "★"].map((start, index) => (
                        <span
                          key={index}
                          style={{
                            color:
                              index + 1 <= product?.rating
                                ? "rgb(255, 215, 0)"
                                : "#000",
                          }}
                        >
                          {start}
                        </span>
                      ))}
                    </div>
                    <div className="price">
                      <span className={"main_price"}>
                        {currencyString(product?.main_price)}
                      </span>
                      {product?.sale ? (
                        <span className={"sale_price"}>
                          -{currencyString(product?.sale)}
                        </span>
                      ) : null}
                    </div>
                    <Link className="btn-more" to={`/product/${product.ident}`}>
                      {langData.more}
                    </Link>
                  </div>
                </div>
                <div className="between">
                  <button
                    className="delete_cart"
                    onClick={() => handleRemoveCart(product)}
                  >
                    <span>Savatda o’chirish</span>
                    <ClearIconRed />
                  </button>
                  <div className="flex_row">
                    <div className="count_changers">
                      <button
                        className="ranger"
                        onClick={() =>
                          isProductCount(product) < product?.count
                            ? handleCartAddCount(product)
                            : null
                        }
                      >
                        <PlusIcon />
                      </button>
                      <span>{isProductCount(product)}</span>
                      <button
                        className="ranger"
                        onClick={() => handleCartRemoveCount(product)}
                      >
                        <MinusIcon />
                      </button>
                    </div>
                    <div className="flex_row">
                      <button
                        className={`primary ${
                          isSelectedProduct(product, compareItems)
                            ? "active"
                            : ""
                        }`}
                        onClick={() => handleCompare(product)}
                      >
                        <CompareIconSecond color="#015CCF" />
                      </button>
                      <button
                        className={`primary ${
                          isSelectedProduct(product, wishes) ? "active" : ""
                        }`}
                        onClick={() => handleWishes(product)}
                      >
                        <Like color="#015CCF" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <ul>
              <li>
                <span className="key fs_18 total_value">
                  {langData.total_value}
                </span>
                <span className="value fs_18 black">{currencyString(total_infos.total_summ)}</span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="key">{langData.promokod}</span>
                <span className="value">5% (25 000 so’m)</span>
              </li>
              <li>
                <span className="key">{langData.shipping_cost}</span>
                <span className="value">15 000 so’m</span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="key">{langData.payment_type}</span>
                <span className="value">Karta orqali</span>
              </li>
              <li>
                <span className="key">{langData.address}</span>
                <span className="value">
                  Tamarahoni uy muzeyi Mustaqillik...
                </span>
              </li>
            </ul>
            <button className="submit">{langData.order_booking}</button>
          </div>
        </div>
      ) : (
        <div className="center">
          <h3 className="empty_text">{langData.empty}</h3>
          <Link to={"/"} className="go_main">
            {langData.go_main}
          </Link>
        </div>
      )}
    </CartStyled>
  );
};

export default Cart;
