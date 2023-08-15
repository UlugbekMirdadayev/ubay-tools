import React, { useMemo, useCallback, useState, useEffect } from "react";
import HeaderStyled from "./styles";
import {
  CartIcon,
  CompareIcon,
  HeartIcon,
  Logo,
  MenuIcon,
  Search,
  UserIcon,
} from "../icon";
import Selector from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { setLang } from "../../redux/lang-slice";
import locale from "../../localization/locale.json";
import { NavLink } from "react-router-dom";
import { setSidebarVisible } from "../../redux/sidebar-slice";
import Sidebar from "../sidebar";
import UserModal from "../userModal";
import { api } from "../../api";
import { setLogOut, setLogin } from "../../redux/user-slice";

const languages = [
  {
    title: "Uz",
    key: "uz",
  },
  {
    title: "Ру",
    key: "ru",
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const lang = Selector.useLang();
  const wishes = Selector.useWishes();
  const cartItems = Selector.useCart();
  const compareItems = Selector.useCompare();
  const user = Selector.useUser();
  const [open, setOpen] = useState(false);

  const langData = useMemo(() => locale[lang]["header"], [lang]);

  document.title = locale[lang].seo.title;
  const handleChangeLang = useCallback(
    (lang_) => {
      dispatch(setLang(lang_));
    },
    [dispatch]
  );

  const openUserModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(true);
  };

  const closeUserModal = () => setOpen(false);

  useEffect(() => {
    const userLocale = JSON.parse(localStorage["ubay-user-data"] || "{}");
    if (userLocale.phone) {
      api
        .search_user({
          phone_search: { phone: userLocale.phone },
        })
        .then(({ data }) => {
          if (data.res_id === 200) {
            dispatch(setLogin(data?.result));
          } else {
            dispatch(setLogOut());
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(setLogOut());
        });
    }
  }, [dispatch]);

  const links = [
    {
      key: "compare",
      link: "/compare",
      icon: <CompareIcon />,
      count: compareItems?.length,
    },
    {
      key: "wishes",
      link: "/wishes",
      icon: <HeartIcon />,
      count: wishes?.length,
    },
    {
      key: "cart",
      link: "/cart",
      icon: <CartIcon />,
      count: cartItems?.length,
    },
    {
      key: "user",
      link: "/profile/user",
      icon: <UserIcon />,
      onClick: user?.id ? null : openUserModal,
      user_name: user?.ism ? langData.between.cabinent  : null,
    },
  ];

  const handleSidebarChange = useCallback(() => {
    dispatch(setSidebarVisible(true));
  }, [dispatch]);

  return (
    <HeaderStyled>
      <Sidebar
        lang={lang}
        langData={locale[lang].home.sidebar}
        isMobile={true}
      />
      <nav>
        <a href="tel:+998 (71) 011 89 34">+998 (71) 011 89 34</a>
        <div className="flex-group">
          {languages.map((language) => (
            <button
              className={language.key === lang ? "active" : null}
              onClick={() => handleChangeLang(language.key)}
              key={language.title}
            >
              {language.title}
            </button>
          ))}
        </div>
      </nav>
      <div className="navbar">
        <button className="mb-btn" onClick={handleSidebarChange}>
          <MenuIcon />
        </button>
        <div className="space">
          <NavLink to={"/"} className="logo_box">
            <Logo className="logo" />
          </NavLink>
          <label className="search-bar">
            <input type="text" placeholder={langData.search_placeholder} />
            <Search />
          </label>
        </div>
        <div className="between">
          {links.map((item) => (
            <NavLink
              to={item.link}
              key={item.key}
              onClick={item.onClick}
              className="box"
            >
              <div className="icon">
                {item.count ? (
                  <span>{item?.count > 9 ? "9+" : item?.count}</span>
                ) : null}
                {item.icon}
              </div>
              <p>{item?.user_name || langData.between[item.key]}</p>
            </NavLink>
          ))}
        </div>
      </div>
      {open ? <UserModal handleClose={closeUserModal} /> : null}
    </HeaderStyled>
  );
};

export default Header;
