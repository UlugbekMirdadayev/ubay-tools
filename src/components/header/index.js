import React, { useMemo, useCallback } from "react";
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
  const favorites = Selector.useFavorites();
  const cartItems = Selector.useCart();
  const compareItems = Selector.useCompare();
  const langData = useMemo(() => locale[lang]["header"], [lang]);
  document.title = locale[lang].seo.title;
  const handleChangeLang = useCallback(
    (lang_) => {
      dispatch(setLang(lang_));
    },
    [dispatch]
  );
  const links = [
    {
      key: "compare",
      link: "/compare",
      icon: <CompareIcon />,
      count: compareItems?.length,
    },
    {
      key: "favorites",
      link: "/favorites",
      icon: <HeartIcon />,
      count: favorites?.length,
    },
    {
      key: "cart",
      link: "/cart",
      icon: <CartIcon />,
      count: cartItems?.length,
    },
    {
      key: "user",
      link: "/user",
      icon: <UserIcon />,
    },
  ];
  
  const handleSidebarChange = useCallback(() => {
    dispatch(setSidebarVisible(true));
  }, [dispatch]);

  return (
    <HeaderStyled>
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
            <NavLink to={item.link} key={item.key} className="box">
              <div className="icon">
                {item.count ? (
                  <span>{item?.count > 9 ? "9+" : item?.count}</span>
                ) : null}
                {item.icon}
              </div>
              <p>{langData.between[item.key]}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
