import React, { useMemo, useCallback, useEffect, useState } from "react";
import HeaderStyled from "./styles";
import {
  Arrow,
  CartIcon,
  CloseArrow,
  CompareIcon,
  HeartIcon,
  LoaderIcon,
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
import { setProducts } from "../../redux/products-slice";
import { useTransition } from "react";

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
  const [isPending, startTransition] = useTransition();
  const [filteredData, setFilteredData] = useState(products || []);
  const langData = useMemo(() => locale[lang]["header"], [lang]);

  const handleGetProducts = useCallback(() => {
    if (products?.length) return;
    const formData = {
      sort: "desc",
      limit: 50,
    };
    api
      .get_products(formData)
      .then(({ data }) => {
        if (data?.length) {
          dispatch(setProducts(data?.filter((prod) => prod?.inStock)));
        } else {
          console.log(data);
          dispatch(setProducts([]));
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [dispatch, products?.length]);

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
    if (userLocale.token) {
      api
        .me(userLocale.token)
        .then(({ data }) => {
          dispatch(setLogin({ ...data, token: userLocale.token }));
        })
        .catch(({ response: { data } = { data: { message: "Network error"} } }) => {
          toast.error(data?.message);
          if (data?.cod === 401) {
            dispatch(setLogOut());
          }
          console.log(data);
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
      onClick: user?._id ? null : openUserModal,
      user_name: user?._id ? langData.between.cabinent : null,
    },
  ];

  const handleSidebarChange = useCallback(() => {
    dispatch(setSidebarVisible(true));
  }, [dispatch]);

  const handleSearch = useCallback(
    ({ target: { value } }) => {
      startTransition(() => {
        setVisible(true);
        setSearchValue(value);
        if (value?.length >= 2) {
          setFilteredData(
            products?.filter(
              (product) =>
                product?.title?.toLowerCase()?.includes(value?.toLowerCase()) ||
                product?.title_uz
                  ?.toLowerCase()
                  ?.includes(value?.toLowerCase()) ||
                product?.seo?.toLowerCase()?.includes(value?.toLowerCase())
            )
          );
        } else {
          setFilteredData([]);
        }
      });
    },
    [products]
  );

  const isNight = useMemo(
    () => ["banner"].includes(pathname?.split("/")[1]),
    [pathname]
  );

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

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
        <a href="tel:+998 (90) 000 50 20">+998 (90) 000 50 20</a>
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
              isPending ? (
                <LoaderIcon className="loader-icon" />
              ) : (
                <CloseArrow
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSearch({ target: { value: "" } });
                    setVisible(false);
                  }}
                  color="#999999"
                />
              )
            ) : (
              <Search />
            )}

            {visible && searchValue?.length >= 2 && (
              <div className="list_products">
                <div
                  className={`scroll-custome ${
                    filteredData?.length ? "" : "empty"
                  }`}
                >
                  {filteredData?.length ? (
                    filteredData?.map((product) => (
                      <Link
                        key={product?.seo}
                        to={`/product/${product?.seo}`}
                        onClick={() => {
                          handleSearch({ target: { value: "" } });
                          setVisible(false);
                        }}
                      >
                        <img
                          src={API.baseURL_IMAGE + product?.images}
                          alt="product"
                        />
                        <div className="row">
                          <span>
                            {lang === "uz"
                              ? product?.title_uz || product?.title
                              : product?.title}
                          </span>
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
