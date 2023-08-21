import React, { useMemo, useCallback, useEffect, useState } from "react";
import HeaderStyled from "./styles";
import {
  Arrow,
  CartIcon,
  CloseArrow,
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
import { Link, NavLink, useLocation } from "react-router-dom";
import { setSidebarVisible } from "../../redux/sidebar-slice";
import Sidebar from "../sidebar";
import AddressAdd from "../userModal/address";
import UserUpdateForm from "../userModal/update";
import UserPassword from "../userModal/password";
import { api } from "../../api";
import { setLogOut, setLogin } from "../../redux/user-slice";
import { setOpenLoginModal } from "../../redux/modals-slice";
import UserModal from "../userModal/login";
import { toast } from "react-toastify";
import { API } from "../../utils/constants";

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
  const { products } = Selector.useProducts();
  const user = Selector.useUser();
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [visible, setVisible] = useState("");
  const [filteredData, setFilteredData] = useState(products || []);
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
    dispatch(setOpenLoginModal(true));
  };

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
            toast.error(data?.mess);
          }
        })
        .catch(({ message }) => {
          dispatch(setLogOut());
          toast.error(message);
          console.log(message);
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
      user_name: user?.ism ? langData.between.cabinent : null,
    },
  ];

  const handleSidebarChange = useCallback(() => {
    dispatch(setSidebarVisible(true));
  }, [dispatch]);

  const handleSearch = useCallback(
    ({ target: { value } }) => {
      setVisible(true);
      setSearchValue(value);
      setFilteredData(
        products.filter(
          (product) =>
            product?.name?.includes(value) || product?.title_uz?.includes(value)
        )
      );
    },
    [products]
  );

  const isNight = useMemo(
    () => ["banner"].includes(pathname?.split("/")[1]),
    [pathname]
  );

  return (
    <HeaderStyled className={isNight ? "isNight" : ""}>
      <AddressAdd />
      <UserUpdateForm />
      <UserPassword />
      <UserModal />

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
          {visible && (
            <div className="overlay" onClick={() => setVisible(false)} />
          )}
          <label className={`search-bar ${visible && "focused"}`}>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearch}
              onFocus={() => setVisible(true)}
              placeholder={langData.search_placeholder}
            />
            {visible ? (
              <CloseArrow
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSearch({ target: { value: "" } });
                  setVisible(false);
                }}
                color="#999999"
              />
            ) : (
              <Search />
            )}

            {visible && (
              <div className="list_products">
                <div
                  className={`scroll-custome ${
                    filteredData.length ? "" : "empty"
                  }`}
                >
                  {filteredData.length ? (
                    filteredData.map((product) => (
                      <Link
                        key={product?.ident}
                        to={`/product/${product?.ident}`}
                        onClick={() => setVisible(false)}
                      >
                        <img
                          src={API.baseURL_IMAGE + product?.photo}
                          alt="product"
                        />
                        <div className="row">
                          <span>{product?.name}</span>
                          <Arrow />
                        </div>
                      </Link>
                    ))
                  ) : (
                    <Link to={"#"}>
                      <div className="row empty">
                        <span>Not Found 404</span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            )}
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
    </HeaderStyled>
  );
};

export default Header;
