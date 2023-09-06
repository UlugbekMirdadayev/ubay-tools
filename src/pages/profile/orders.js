import React, { useEffect } from "react";
import { api } from "../../api";
import { setOrders } from "../../redux/orders-slice";
import { API, currencyString } from "../../utils/constants";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Orders = ({ user, dispatch, data, langData, lang }) => {
  useEffect(() => {
    if (data?.length || !user?._id) return;
    const headers = {
      headers: {
        "x-access-token": JSON.parse(localStorage["ubay-user-data"] || "{}")
          ?.token,
      },
    };
    api
      .get_user_orders(headers)
      .then(({ data }) => {
        if (data?.length) {
          dispatch(setOrders(data));
        }
      })
      .catch(({ response: { data } = { data: { message: "Network error"} } }) => {
        toast.error(data?.message || JSON.stringify(data));
        console.log(data);
      });
  }, [user?._id, dispatch, data?.length]);

  return (
    <div className="infos">
      <h1 className="sticky">{langData.my_orders}</h1>
      {data.map((order) => (
        <details
          key={order?._id}
          className={`order ${
            order.paymentType === "PAID"
              ? "payed"
              : order.paymentType === "PENDING"
              ? "panding"
              : order.paymentType === "CANCELED"
              ? "canceled"
              : ""
          }`}
        >
          <summary>
            <div className="top_bar">
              <div className="left">
                <div>
                  {langData.order_date}{" "}
                  {moment(order?.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                </div>
                <div>№ {order?.ordernumber}</div>
                <div>{currencyString(order?.total_price)} </div>
                {order?.promoDiscount ? (
                  <div>
                    {langData.discount}:{" "}
                    <span className="promo">
                      {" -" + order?.promoDiscount + "%"}
                    </span>
                  </div>
                ) : null}
                <div>
                  {langData.order_status}: {langData[order.loanType]}
                </div>
              </div>
              <div className="pay">
                {order.paymentType === "PAID" ? (
                  <p>{langData.payed}</p>
                ) : order.paymentType === "PENDING" ? (
                  <a
                    title={currencyString(order?.total_price)}
                    target="_blank"
                    rel="nooperer noreferrer"
                    href={`https://my.click.uz/services/pay?service_id=27844&merchant_id=17702&amount=${order?.total_price}&transaction_param=${order?.ordernumber}&return_url=https://ubaytools.com/profile&card_type=uzcard`}
                  >
                    {langData.pay}
                  </a>
                ) : order.paymentType === "CANCELED" ? (
                  <p>{langData.canceled}</p>
                ) : null}
              </div>
            </div>
            <div className="view_btn">{langData.viewing_products}</div>
          </summary>
          <div className="products">
            {order.products.map((product) => (
              <Link
                key={product?._id}
                to={`/product/${product?.seo}`}
                className="product"
              >
                <img src={API.baseURL_IMAGE + product?.images} alt="product" />
                <div className="col_text">
                  <div className="name_product">
                    {lang === "uz"
                      ? product?.title_uz || product?.title
                      : product?.title}
                  </div>
                  <h3>{currencyString(product?.price)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};

export default Orders;
