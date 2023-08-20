import React, { useEffect, useMemo } from "react";
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
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setUserAddress } from "../../redux/userAddress-slice";
import { setLogOut } from "../../redux/user-slice";
import Orders from "./orders";
import { setOpenAddressModal, setOpenPasswordModal, setOpenUpdateModal } from "../../redux/modals-slice";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = Selectors.useLang();
  const user = Selectors.useUser();
  const langData = useMemo(() => locale[lang]["profile"], [lang]);
  const addresses = Selectors.useUserAddress();
  const orders = Selectors.useOrders();
  const param = useParams();

  const routes = {
    user: (
      <>
        <div className="infos">
          <h1>{langData.info_user}</h1>
          <li>
            <span className="key">{langData.id_user}</span>
            <span className="value">{user?.id}</span>
          </li>
          <li>
            <span className="key">{langData.full_name}</span>
            <span className="value">{`${user?.ism} ${user?.fam}`}</span>
          </li>
          <button className="editor"  onClick={() => dispatch(setOpenUpdateModal(true))}>{langData.edit}</button>
          <h1>{langData.password}</h1>
          <li>
            <span className="key">{langData.current_password}</span>
            <span className="value Roboto">****</span>
          </li>
          <button className="editor" onClick={() => dispatch(setOpenPasswordModal(true))}>{langData.edit}</button>
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
            {addresses?.length ? (
              addresses?.map((address) => (
                <div key={address?.ident} className="address">
                  <h1>{address.adress}</h1>
                  <p>
                    {langData.city}: {address.c_name}
                  </p>
                  <p>
                    {langData.region}: {address.r_name}
                  </p>
                  <p>
                    {langData.home}: {address.home}
                  </p>
                  {address.flat && (
                    <p>
                      {langData.flat}: {address.flat}
                    </p>
                  )}
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
          toast.error(data?.mess);
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [addresses?.length, user?.id, dispatch]);

  return user?.id ? (
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
    ""
  );
};

export default Profile;
