import React, { useMemo } from "react";
import { NotFoundStyled } from "./style";
import { Link } from "react-router-dom";
import { LeftArrow } from "../icon";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json"

const NotFound = () => {
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["404"], [lang]);
  return (
    <NotFoundStyled>
      <img src={require("../../images/404.png")} alt="404" />
      <p>{langData.title}</p>
      <Link to={"/"}>
        <LeftArrow /> <span> {langData.to_home}</span>
      </Link>
    </NotFoundStyled>
  );
};

export default NotFound;
