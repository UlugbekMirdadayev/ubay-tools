import React, { useEffect } from "react";
import { api } from "../../api";
import { setOrders } from "../../redux/orders-slice";
import { API, currencyString } from "../../utils/constants";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Orders = ({ user, dispatch, data, langData, lang }) => {
  useEffect(() => {
    if (data?.length || !user?.id) return;
    api
      .get_user_orders({
        show_list: { id: user?.id },
      })
      .then(({ data }) => {
        console.log(data);
        if (data.res_id === 200) {
          dispatch(setOrders(data?.result));
        } else {
          console.log(data);
          toast.error(data?.mess);
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [user?.id, dispatch, data?.length]);

  return (
    <div className="infos">
      <h1 className="sticky">{langData.my_orders}</h1>
      {data.map((order, key) => (
        <details
          key={order?.ident}
          className={`order ${key % 2 ? "payed" : ""}`}
        >
          <summary>
            <div className="top_bar">
              <div className="left">
                <div>
                  {langData.order_date}{" "}
                  {moment(order?.datein).format("HH:MM DD/MM/YYYY")}
                </div>
                <div>№ {order?.number}</div>
                <div>{currencyString(order?.amount)}</div>
              </div>
              <div className="pay">
                {key % 2 ? (
                  <p>{langData.payed}</p>
                ) : (
                  <a
                    title={currencyString(order?.amount)}
                    target="_blank"
                    rel="nooperer noreferrer"
                    href={`https://my.click.uz/services/pay?service_id=27844&merchant_id=17702&amount=${order?.amount}&transaction_param=${order?.number}&return_url=https://ubaytools.com/profile&card_type=uzcard`}
                  >
                    {langData.pay}
                  </a>
                )}
              </div>
            </div>
            <div className="view_btn">{langData.viewing_products}</div>
          </summary>
          <div className="products">
            {order.products.map((product) => (
              <Link
                key={product?.ident}
                to={`/product/${product?.ident}`}
                className="product"
              >
                <img src={API.baseURL_IMAGE + product?.photo} alt="product" />
                <div className="col_text">
                  <div className="name_product">
                    {product[`title${lang === "uz" ? "_uz" : ""}`]}
                  </div>
                  <h3>{currencyString(product?.main_price)}</h3>
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
