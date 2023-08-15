import React, { Fragment } from "react";
import BreadcrumbStyled from "./style";
import { NavLink } from "react-router-dom";

const Breadcrumb = ({ links, sticky = false }) => {
  const stickyStyle = {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
  };
  return (
    <BreadcrumbStyled style={sticky && stickyStyle}>
      {links.map((item, key, data) => (
        <Fragment key={key}>
          <NavLink to={item.link}>{item.text}</NavLink>
          {data.length - 1 !== key ? <span>/</span> : null}
        </Fragment>
      ))}
    </BreadcrumbStyled>
  );
};

export default Breadcrumb;
