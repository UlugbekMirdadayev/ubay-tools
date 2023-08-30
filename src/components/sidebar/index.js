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
  const { categories } = Selectors.useCategories();
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

  const isActiveCategory = (category) =>
    categoryId === category?.seo ||
    category?.children?.find((child) => child?.seo === categoryId);

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
          <Fragment key={category?._id}>
            <NavLink
              onClick={handleSidebarChange}
              to={`/category/${category?.seo}`}
            >
              {category[lang === "uz" ? "title_uz" : "title"]}
            </NavLink>
            {isActiveCategory(category)
              ? category?.children?.map((sub_category) => (
                  <NavLink
                    key={sub_category?.seo}
                    id={sub_category?.seo}
                    ref={(ref) => scrollToElement(ref)}
                    className={`sub_category ${
                      categoryId === sub_category?.seo
                    }`}
                    onClick={handleSidebarChange}
                    to={`/category/${category?.seo}/${sub_category?.seo}`}
                  >
                    {sub_category[lang === "uz" ? "title_uz" : "title"]}
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
