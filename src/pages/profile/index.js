import React, { useEffect, useMemo } from "react";
import Breadcrumb from "../../components/breadcrumb";
import { ProfileStyled } from "./style";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";
import { NavLink, useNavigate } from "react-router-dom";
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

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = Selectors.useLang();
  const user = Selectors.useUser();
  const langData = useMemo(() => locale[lang]["profile"], [lang]);
  const addresses = Selectors.useUserAddress();

  useEffect(() => {
    api
      .get_user_address({
        show_adress: { id: user?.id },
      })
      .then(({ data }) => {
        if (data.res_id === 200) {
          dispatch(setUserAddress(data?.result));
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addresses?.length, user?.id, dispatch]);

  return user?.id ? (
    <ProfileStyled>
      <Breadcrumb links={langData.breadcrumb} sticky />
      <div className="grid">
        <div className="space">
          <ul>
            <NavLink to={"/profile/user"}>
              <UserIcon color="#015ccf" /> <span>{langData.info_user}</span>
            </NavLink>
            <NavLink to={"/profile/orders"}>
              <OrdersIcon />
              <span>{langData.my_orders}</span>
            </NavLink>
            <NavLink to={"/profile/address"}>
              <LocationIcon />
              <span>{langData.addresses}</span>
            </NavLink>
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
              <span>{langData.wishes}</span>
            </div>
          </ul>
        </div>
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
          <button className="editor">{langData.edit}</button>
          <h1>{langData.password}</h1>
          <li>
            <span className="key">{langData.current_password}</span>
            <span className="value">****</span>
          </li>
          <button className="editor">{langData.edit}</button>
        </div>
        <div className="addresses">
          <li>
            <div className="left">
              <div className="circle">
                <LocationIcon color="#015CCF" />
              </div>
              <span>{langData.delivery_address}</span>
            </div>
            <button>{langData.add}</button>
          </li>
          <div className="scroll-area scroll-custome">
            {addresses?.length ? (
              addresses.map((address) => (
                <div key={address?.ident} className="address">
                  <h1>{address.adress}</h1>
                  <p>
                    {langData.city}: {address.c_name}
                  </p>
                  <p>
                    {langData.region}: {address.r_name}
                  </p>
                </div>
              ))
            ) : (
              <div className="empty">{langData.empty_address}</div>
            )}
          </div>
        </div>
      </div>
    </ProfileStyled>
  ) : (
    ""
  );
};

export default Profile;
