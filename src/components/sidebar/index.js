import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
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
import UserModal from "../userModal";

const Sidebar = ({ langData, lang, isMobile }) => {
  const dispatch = useDispatch();
  const categories = Selectors.useCategories();
  const sidebar = Selectors.useSidebar();
  const wishes = Selectors.useWishes();
  const cartItems = Selectors.useCart();
  const compareItems = Selectors.useCompare();
  const user = Selectors.useUser();
  const [open, setOpen] = useState(false);

  const openUserModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(true);
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
      link: "/user",
      icon: <UserIcon />,
      onClick: user.id ? null : openUserModal,
    },
  ];

  const handleSidebarChange = useCallback(() => {
    dispatch(setSidebarVisible(false));
  }, [dispatch]);

  const closeUserModal = () => setOpen(false);

  return (
    <SideabarStyled
      aria-label={`sidebar ${sidebar}`}
      aria-colcount={2}
      className={`${sidebar ? "opened" : ""} ${
        isMobile ? "mobile-sidebar" : "pc-header"
      }`}
    >
      {open ? <UserModal handleClose={closeUserModal} /> : null}
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
