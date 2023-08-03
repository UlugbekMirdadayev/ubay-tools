import React, { useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../api";
import Selectors from "../../redux/selectors";
import { setCategories } from "../../redux/categories-slice";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loading-slice";
import {
  CartIcon,
  CloseArrow,
  CompareIcon,
  HeartIcon,
  UserIcon,
} from "../icon";
import { setSidebarVisible } from "../../redux/sidebar-slice";
import { SideabarStyled } from "./style";

const Sidebar = ({ langData, lang, isMobile }) => {
  const dispatch = useDispatch();
  const categories = Selectors.useCategories();
  const sidebar = Selectors.useSidebar();
  const favorites = Selectors.useFavorites();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();

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

  const getCategories = useCallback(() => {
    console.log("get categories");
    dispatch(setLoading(true));
    api
      .get_categories()
      .then(({ data }) => {
        dispatch(setLoading(false));
        if (data?.result?.length) {
          dispatch(
            setCategories(data?.result?.sort((a, b) => a?.ident - b?.ident))
          );
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.error(err?.code);
      });
  }, [dispatch]);

  useEffect(() => {
    return () => {
      getCategories();
    };
  }, [getCategories]);

  const handleSidebarChange = useCallback(() => {
    dispatch(setSidebarVisible(false));
  }, [dispatch]);

  return (
    <SideabarStyled
      aria-label={`sidebar ${sidebar}`}
      aria-colcount={2}
      className={`${sidebar ? "opened" : ""} ${
        isMobile ? "mobile-sidebar" : "pc-header"
      }`}
    >
      <h1 className="title-c">
        <CloseArrow onClick={handleSidebarChange} />
        <span>{langData.title}</span>
      </h1>
      <ul className="scroll-custome">
        {categories?.map((category) => (
          <NavLink
            onClick={handleSidebarChange}
            key={category?.ident}
            to={`/category/${category?.ident}`}
          >
            {category[lang === "uz" ? "name_uz" : "name"]}
          </NavLink>
        ))}
      </ul>
      <div className="mobile_bar">
        {links.map((item) => (
          <NavLink to={item.link} key={item.key} className="box">
            <div className="icon">
              {item.count ? (
                <span>{item?.count > 9 ? "9+" : item?.count}</span>
              ) : null}
              {item.icon}
            </div>
          </NavLink>
        ))}
      </div>
    </SideabarStyled>
  );
};

export default Sidebar;