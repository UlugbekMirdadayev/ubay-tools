import React, { useMemo } from "react";
import Breadcrumb from "../../components/breadcrumb";
import { ProfileStyled } from "./style";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  Like,
  LocationIcon,
  LogOutIcon,
  OrdersIcon,
  UserIcon,
} from "../../components/icon";
import { useDispatch } from "react-redux";
import { setLogOut, setLogin } from "../../redux/user-slice";
import Orders from "./orders";
import {
  setOpenAddressModal,
  setOpenPasswordModal,
  setOpenUpdateModal,
} from "../../redux/modals-slice";
import NotFound from "../../components/404";
import { api } from "../../api";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = Selectors.useLang();
  const user = Selectors.useUser();
  const langData = useMemo(() => locale[lang]["profile"], [lang]);
  const orders = Selectors.useOrders();
  const param = useParams();

  const headers = {
    headers: {
      "x-access-token": JSON.parse(localStorage["ubay-user-data"] || "{}")
        ?.token,
    },
  };

  const handleActiveAddress = (address_id) => {
    api
      .update_address(address_id, {}, headers)
      .then(({ data }) => {
        dispatch(
          setLogin({ ...data, token: headers.headers["x-access-token"] })
        );
      })
      .catch(
        ({ response: { data } = { data: { message: "Network error" } } }) => {
          console.log(data);
        }
      );
  };

  const routes = {
    user: (
      <>
        <div className="infos">
          <h1>{langData.info_user}</h1>
          <li>
            <span className="key">{langData.id_user}</span>
            <span className="value">{user?._id}</span>
          </li>
          <li>
            <span className="key">{langData.full_name}</span>
            <span className="value">{user?.fullName}</span>
          </li>
          <button
            className="editor"
            onClick={() => dispatch(setOpenUpdateModal(true))}
          >
            {langData.edit}
          </button>
          <h1>{langData.password}</h1>
          <li>
            <span className="key">{langData.current_password}</span>
            <span className="value Roboto">****</span>
          </li>
          <button
            className="editor"
            onClick={() => dispatch(setOpenPasswordModal(true))}
          >
            {langData.edit}
          </button>
        </div>
        <div className="addresses">
          <li>
            <div className="left">
              <div className="circle">
                <LocationIcon color="#015CCF" />
              </div>
              <span>{langData.delivery_address}</span>
            </div>
            <button onClick={() => dispatch(setOpenAddressModal(true))}>
              {langData.add}
            </button>
          </li>
          <div className="scroll-area scroll-custome">
            {user?.address?.length ? (
              [...user?.address]
                ?.sort((a, b) => {
                  return (
                    Number(user?.activeAdr === b?._id) -
                    Number(user?.activeAdr === a?._id)
                  );
                })
                ?.map((address) => (
                  <div
                    onClick={() =>
                      user?.activeAdr === address?._id
                        ? null
                        : handleActiveAddress(address?._id)
                    }
                    key={address?._id}
                    className={`address ${
                      user?.activeAdr === address?._id ? "active" : ""
                    }`}
                  >
                    <h1>{address.street}</h1>
                    <p>
                      {langData.city}: {address.city}
                    </p>
                    <p>
                      {langData.region}: {address.district}
                    </p>
                    <p>
                      {langData.home}: {address.house}
                    </p>
                    <p>
                      {langData.flat}: {address.floor}
                    </p>
                  </div>
                ))
            ) : (
              <div className="empty">{langData.empty_address}</div>
            )}
          </div>
        </div>
      </>
    ),
    orders: (
      <Orders
        user={user}
        dispatch={dispatch}
        data={orders}
        langData={langData}
        lang={lang}
      />
    ),
  };
  return user?._id ? (
    <ProfileStyled>
      <Breadcrumb links={langData.breadcrumb} sticky />
      <div className={`grid ${param.route}`}>
        <div className="space sticky">
          <ul>
            <NavLink to={"/profile/user"}>
              <UserIcon color="#015ccf" /> <span>{langData.info_user}</span>
            </NavLink>
            <NavLink to={"/profile/orders"}>
              <OrdersIcon />
              <span>{langData.my_orders}</span>
            </NavLink>
            {/* <NavLink to={"/profile/address"}>
              <LocationIcon />
              <span>{langData.addresses}</span>
            </NavLink> */}
            <NavLink to={"/wishes"}>
              <Like />
              <span>{langData.wishes}</span>
            </NavLink>
            <div
              className="a"
              onClick={() => {
                dispatch(setLogOut());
                navigate("/", { replace: true });
              }}
            >
              <LogOutIcon />
              <span>{langData.logout}</span>
            </div>
          </ul>
        </div>
        {routes[param.route] || routes["user"]}
      </div>
    </ProfileStyled>
  ) : (
    <NotFound />
  );
};

export default Profile;
