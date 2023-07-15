import React, { useMemo } from "react";
import { useLang } from "../../redux/selectors";
import locale from "../../localization/locale.json";
import HomeStyled from "./style";
import Sidebar from "./sidebar";
import ScrollArea from "./scrollArea";

const Home = () => {
  const lang = useLang();
  const langData = useMemo(() => locale[lang]["home"], [lang]);

  return (
    <HomeStyled>
      <Sidebar langData={langData.sidebar} />
      <ScrollArea />
    </HomeStyled>
  );
};

export default Home;
