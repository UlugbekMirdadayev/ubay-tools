import React, { useMemo } from "react";
import { WarrantyStyled } from "./style";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";

const Warranty = () => {
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["warranty"], [lang]);
  return (
    <WarrantyStyled>
      {langData.array.map((text, key) => (
        <p key={key}>{text}</p>
      ))}
    </WarrantyStyled>
  );
};

export default Warranty;
