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
} from "../../components/icon";
import { setSidebarVisible } from "../../redux/sidebar-slice";

const Sidebar = ({ langData, lang }) => {
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
    if (categories?.length) return null;
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
  }, [categories.length, dispatch]);

  useEffect(() => {
    const getResult = () => getCategories();
    return () => {
      getResult();
    };
  }, [getCategories]);

  const handleSidebarChange = useCallback(() => {
    dispatch(setSidebarVisible(false));
  }, [dispatch]);

  return (
    <article className={sidebar ? "opened" : ""}>
      <h1 className="title-c">
        <CloseArrow onClick={handleSidebarChange} />
        {langData.title}
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
    </article>
  );
};

export default Sidebar;
