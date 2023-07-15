import React, { useMemo, useEffect } from "react";
import HeaderStyled from "./styles";
import {
  CartIcon,
  CompareIcon,
  HeartIcon,
  Logo,
  Search,
  UserIcon,
} from "../icon";
import { useLang } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { setLang } from "../../redux/lang-slice";
import locale from "../../localization/locale.json";
import { NavLink } from "react-router-dom";

const languages = [
  {
    title: "Ўзб",
    key: "уз",
  },
  {
    title: "Uz",
    key: "uz",
  },
  {
    title: "Ру",
    key: "ru",
  },
];

const links = [
  {
    key: "compare",
    link: "/compare",
    icon: <CompareIcon />,
  },
  {
    key: "favorites",
    link: "/favorites",
    icon: <HeartIcon />,
  },
  {
    key: "cart",
    link: "/cart",
    icon: <CartIcon />,
  },
  {
    key: "user",
    link: "/user",
    icon: <UserIcon />,
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const lang = useLang();
  const langData = useMemo(() => locale[lang]["header"], [lang]);
  const handleChangeLang = (lang_) => dispatch(setLang(lang_.target.value));

  useEffect(() => {
    const titleChange = () => (document.title = locale[lang].seo.title);
    return () => {
      titleChange();
    };
  }, [lang]);

  return (
    <HeaderStyled>
      <nav>
        <a href="tel:+998 (71) 011 89 34">+998 (71) 011 89 34</a>
        <div className="flex-group">
          {languages.map((language) => (
            <button
              className={language.key === lang ? "active" : null}
              onClick={handleChangeLang}
              key={language.title}
              value={language.key}
            >
              {language.title}
            </button>
          ))}
        </div>
      </nav>
      <div className="navbar">
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
                {item.key === "cart" ? <span>9+</span> : null}
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
