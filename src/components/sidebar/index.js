import React, { useCallback, Fragment, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Selectors from "../../redux/selectors";
import { useDispatch } from "react-redux";
import {
  CartIcon,
  CloseArrow,
  CompareIcon,
  HeartIcon,
  UserIcon,
} from "../icon";
import { setSidebarVisible } from "../../redux/sidebar-slice";
import { SideabarStyled } from "./style";
import { setOpenLoginModal } from "../../redux/modals-slice";

const Sidebar = ({ langData, lang, isMobile, categoryId = null, loading }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { categories, sub_categories } = Selectors.useCategories();
  const sidebar = Selectors.useSidebar();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const user = Selectors.useUser();

  categoryId = useMemo(
    () => (categoryId ? categoryId : pathname.split("/")[2]),
    [categoryId, pathname]
  );

  const openUserModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(setOpenLoginModal(true));
  };

  const withChildren = useMemo(() => pathname.includes("category"), [pathname]);

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
      onClick: user.id ? null : openUserModal,
    },
  ];

  const handleSidebarChange = useCallback(() => {
    dispatch(setSidebarVisible(false));
  }, [dispatch]);

  const scrollToElement = (container) => {
    if (container?.id === categoryId) {
      container?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const isActiveCategory = sub_categories.find(
    (sub_category) =>
      sub_category?.ident === +categoryId ||
      sub_category?.main_ident === +categoryId
  );

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
      <ul
        className={`scroll-custome ${
          loading ? "isLoading" : categories?.length ? "" : "isLoading"
        }`}
      >
        {categories?.map((category) => (
          <Fragment key={category?.ident}>
            <NavLink
              key={category?.ident}
              onClick={handleSidebarChange}
              to={`/category/${category?.ident}`}
            >
              {category[lang === "uz" ? "name_uz" : "name"]}
            </NavLink>
            {withChildren
              ? sub_categories
                  .filter(
                    (sub_category) =>
                      sub_category?.main_ident === category?.ident &&
                      (isActiveCategory?.main_ident ===
                        sub_category?.main_ident ||
                        isActiveCategory?.ident === sub_category?.main_ident)
                  )
                  .map((sub_category) => (
                    <NavLink
                      key={sub_category?.ident}
                      id={sub_category?.ident}
                      ref={(ref) => scrollToElement(ref)}
                      className={`sub_category ${
                        +categoryId === sub_category?.ident
                      }`}
                      onClick={handleSidebarChange}
                      to={`/category/${category?.ident}/${sub_category?.ident}`}
                    >
                      {sub_category[lang === "uz" ? "name_uz" : "name"]}
                    </NavLink>
                  ))
              : null}
          </Fragment>
        ))}
      </ul>
      <div className="mobile_bar">
        {links.map((item) => (
          <NavLink
            to={item.link}
            key={item.key}
            className="box"
            onClick={(e) => {
              item?.onClick && item?.onClick(e);
              handleSidebarChange();
            }}
          >
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
