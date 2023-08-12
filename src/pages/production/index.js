import React, { useMemo } from "react";
import { ProductionStyled } from "./style";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";

const Production = () => {
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["production"], [lang]);
  return (
    <ProductionStyled>
      {langData.array.map((text, key) => (
        <p key={key}>{text}</p>
      ))}
    </ProductionStyled>
  );
};

export default Production;
