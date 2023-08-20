import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BookingOrderStyled } from "./style";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";
import { API, currencyString, isSelectedProduct } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { setProducts } from "../../redux/products-slice";
import { useDispatch } from "react-redux";
import { api } from "../../api";
import {
  setCartAddCount,
  setCartRemoveCount,
  setClearCart,
  setRemoveCart,
} from "../../redux/cart-slice";
import { setLiked } from "../../redux/wishes-slice";
import {
  MinusIcon,
  PhoneIcon,
  PlusIcon,
  RadioIcon,
  UserIcon,
} from "../../components/icon";
import { setUserAddress } from "../../redux/userAddress-slice";
import { setLoading } from "../../redux/loading-slice";
import {
  setOpenAddressModal,
  setOpenUpdateModal,
} from "../../redux/modals-slice";
import { toast } from "react-toastify";
import { setOrders } from "../../redux/orders-slice";
import NotFound from "../../components/404";

const BookingOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = Selectors.useLang();
  const cartItems = Selectors.useCart();
  const wishes = Selectors.useWishes();
  const user = Selectors.useUser();
  const addresses = Selectors.useUserAddress();
  const { products } = Selectors.useProducts();
  const [delivery_type, setDeliveryType] = useState("{{courier}}");
  const [payment_type, setPaymentType] = useState("cash");
  const [comment, setComment] = useState("");
  const [promokod, setPromokod] = useState("");
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

  useEffect(() => {
    handleFilterProducts();
  }, [handleFilterProducts]);

  useEffect(() => {
    if (addresses?.length || !user?.id) return;
    api
      .get_user_address({
        show_adress: { id: user?.id },
      })
      .then(({ data }) => {
        if (data.res_id === 200) {
          dispatch(
            setUserAddress(
              data?.result?.sort((a, b) => a?.ident - b?.ident)?.reverse()
            )
          );
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addresses?.length, user?.id, dispatch]);

  const total_infos = useMemo(() => {
    const array = products
      ?.filter((product) => isSelectedProduct(product, cartItems))
      .map((itemFiltered, key) => ({
        ...cartItems[key],
        ...itemFiltered,
      }));
    const total_summ = array.reduce(
      (currentSum, item) => currentSum + item.main_price * item.cart_count,
      0
    );

    return { total_summ };
  }, [products, cartItems]);

  const productsInCart = useMemo(
    () => products?.filter((product) => isSelectedProduct(product, cartItems)),
    [products, cartItems]
  );

  const isProductCount = (product) => ({
    count: isSelectedProduct(product, cartItems)?.cart_count,
    price: currencyString(
      isSelectedProduct(product, cartItems)?.cart_count * product.main_price
    ),
  });

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

  const handleSubmit = () => {
    dispatch(setLoading(true));
    api
      .set_booking_order({
        insert: {
          id: user?.id,
          delivery_type: 15,
          order: 1,
          pay_type: 1,
          comment,
          all_price:
            total_infos.total_summ -
            (+promokod === new Date().getDate()
              ? (total_infos.total_summ / 100) * new Date().getDate()
              : 0),
          products: productsInCart?.map((product) => ({
            pro_ident: product.ident,
            count: isProductCount(product)?.count,
            main_price: product.main_price,
          })),
        },
      })
      .then(({ data }) => {
        dispatch(setLoading(false));
        if (data.res_id === 200) {
          dispatch(setClearCart());
          toast.success(data?.mess);
          api
            .get_user_orders({
              show_list: { id: user?.id },
            })
            .then(({ data }) => {
              if (data.res_id === 200) {
                dispatch(setOrders(data?.result));
              } else console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
          navigate("/profile/orders");
        } else {
          console.log(data);
          toast.error(JSON.stringify(data?.result));
        }
      })
      .catch(({ message }) => {
        dispatch(setLoading(false));
        toast.error(message);
        console.log(message);
      });
  };

  if (!user?.id) return <NotFound />;

  return (
    <BookingOrderStyled>
      <h1>
        {langData["booking"].title.replace("{{count}}", cartItems?.length)}
      </h1>
      {productsInCart?.length ? (
        <div className="grid">
          <div className="space">
            {productsInCart.map((product) => (
              <div key={product.ident} className="product">
                <Link to={`/product/${product.ident}`}>
                  <img src={API.baseURL_IMAGE + product.photo} alt="product" />
                </Link>
                <div className="info">
                  <h3>{product[`title${lang === "uz" ? "_uz" : ""}`]}</h3>
                  <div className="row">
                    <p
                      className={
                        isSelectedProduct(product, wishes) ? "active" : null
                      }
                      onClick={() => handleWishes(product)}
                    >
                      В избранное
                    </p>
                    <p onClick={() => handleRemoveCart(product)}>Удалить</p>
                  </div>
                </div>
                <div className="controller">
                  <button onClick={() => handleCartRemoveCount(product)}>
                    <MinusIcon />
                  </button>
                  <span>{isProductCount(product).count}</span>
                  <button onClick={() => handleCartAddCount(product)}>
                    <PlusIcon />
                  </button>
                </div>
                <div className="price">{isProductCount(product).price}</div>
              </div>
            ))}
            <h1>{langData["booking"].user_data}</h1>
            <div className="user_info">
              <li>
                <UserIcon color="#C4C4C4" />
                <span>{user.ism + " " + user.fam}</span>
              </li>
              <a href={`tel:+${user.phone}`}>
                <li>
                  <PhoneIcon />
                  <span>{user.phone}</span>
                </li>
              </a>
              <button
                className="edit"
                onClick={() => dispatch(setOpenUpdateModal(true))}
              >
                {langData.edit}
              </button>
            </div>
            <h1>{langData["booking"].delivery_type}</h1>
            <div className="row_btn">
              <label
                className={`primary ${
                  delivery_type === "{{courier}}" ? "active" : ""
                }`}
                onClick={() => setDeliveryType("{{courier}}")}
              >
                <RadioIcon checked={delivery_type === "{{courier}}"} />
                <span>{langData["booking"].delivery_courier}</span>
              </label>
              <label
                className={`primary ${
                  delivery_type === "{{self}}" ? "active" : ""
                }`}
                onClick={() => setDeliveryType("{{self}}")}
              >
                <RadioIcon checked={delivery_type === "{{self}}"} />
                <span>{langData["booking"].delivery_self}</span>
              </label>
            </div>
            <div className="addresses">
              {addresses.map((address) => (
                <label
                  className={delivery_type === address?.adress ? "active" : ""}
                  key={address?.ident}
                  onClick={() => setDeliveryType(address?.adress)}
                >
                  <RadioIcon checked={delivery_type === address?.adress} />
                  <span>{address.adress}</span>
                </label>
              ))}
            </div>
            <button
              onClick={() => dispatch(setOpenAddressModal(true))}
              className={`add_address`}
            >
              <PlusIcon /> <span>{langData.add_address}</span>
            </button>

            <h1>{langData["booking"].payment_type}</h1>
            <div className="addresses payment_type">
              <label
                className={payment_type === "cash" ? "active" : ""}
                onClick={() => setPaymentType("cash")}
              >
                <RadioIcon checked={payment_type === "cash"} />
                <span>
                  {langData["booking"].cash.title}
                  <p>{langData["booking"].cash.text}</p>
                </span>
              </label>
              <label
                className={payment_type === "terminal" ? "active" : ""}
                onClick={() => setPaymentType("terminal")}
              >
                <RadioIcon checked={payment_type === "terminal"} />
                <span>
                  {langData["booking"].terminal.title}
                  <p>{langData["booking"].terminal.text}</p>
                </span>
              </label>
              <div className="row">
                <label
                  className={payment_type === "click" ? "active" : ""}
                  onClick={() => setPaymentType("click")}
                >
                  <RadioIcon checked={payment_type === "click"} />
                  <img
                    src={
                      "https://ubaytools.com/static/media/click.b1d66da9714e224ee48f.png"
                    }
                    alt="click"
                  />
                </label>
                <label
                  className={payment_type === "uzum" ? "active" : ""}
                  onClick={() => setPaymentType("uzum")}
                >
                  <RadioIcon checked={payment_type === "uzum"} />
                  <img
                    src={
                      "https://ubaytools.com/static/media/uzum.dc3fb82565b308a8ec81.png"
                    }
                    alt="uzum"
                  />
                </label>
              </div>
              <div className="commentary">
                <h3>{langData["booking"].commentary.title}</h3>
                <textarea
                  placeholder={langData["booking"].commentary.text}
                  onChange={({ target: { value } }) => setComment(value)}
                />
              </div>
              <div className="submit">
                <button
                  onClick={handleSubmit}
                  disabled={!productsInCart.length}
                >
                  {langData["booking"].purchase}
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <ul>
              <li>
                <span className="key fs_18 total_value">
                  {langData.total_value}
                </span>
                <span className="value fs_18 black">
                  {currencyString(
                    total_infos.total_summ -
                      (+promokod === new Date().getDate()
                        ? (total_infos.total_summ / 100) * new Date().getDate()
                        : 0)
                  )}
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="key">{langData.promokod}</span>
                <span className="value" onClick={() => setPromokod("")}>
                  {+promokod === new Date().getDate() ? (
                    `-${new Date().getDate()}%(${currencyString(
                      (total_infos.total_summ / 100) * new Date().getDate()
                    )})`
                  ) : (
                    <input
                      type="text"
                      className={promokod.length >= 2 ? "error" : null}
                      placeholder={langData.promokod.replace(":", "")}
                      onChange={({ target: { value } }) => setPromokod(value)}
                    />
                  )}
                  &nbsp;
                </span>
              </li>
              <li>
                <span className="key">
                  {langData["booking"].delivery_type}:
                </span>
                <span className="value">
                  {delivery_type === "{{courier}}"
                    ? langData["booking"].delivery_courier
                    : delivery_type === "{{self}}"
                    ? langData["booking"].delivery_self
                    : langData["booking"].delivery_courier || "-"}
                </span>
              </li>
              <li>
                <span className="key">{langData.shipping_cost}</span>
                <span className="value">15 000 so’m</span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="key">{langData.payment_type}</span>
                <span className="value">
                  {payment_type === "uzum"
                    ? langData["booking"].uzum
                    : payment_type === "click"
                    ? langData["booking"].click
                    : payment_type === "terminal"
                    ? langData["booking"].terminal.text
                    : payment_type === "cash"
                    ? langData["booking"].cash.text
                    : "-"}
                </span>
              </li>
              <li>
                <span className="key">{langData.address}</span>
                <span className="value">
                  {delivery_type === "{{courier}}"
                    ? user?.adress || "-"
                    : delivery_type === "{{self}}"
                    ? user?.adress || "-"
                    : delivery_type || user?.adress || "-"}
                </span>
              </li>
            </ul>
            <button
              onClick={handleSubmit}
              disabled={!productsInCart.length}
              className={`submit`}
            >
              {langData.order_booking}
            </button>
            <p className="policy">
              {langData["booking"].policy.text}
              <Link to={"/"}>{langData["booking"].policy.link}</Link>
            </p>
          </div>
        </div>
      ) : (
        <div className={`center`}>
          <h3 className="empty_text">{langData.empty}</h3>
          <Link to={"/"} className="go_main">
            {langData.go_main}
          </Link>
        </div>
      )}
    </BookingOrderStyled>
  );
};

export default BookingOrder;
