import React, { useMemo } from "react";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";
import HomeStyled from "./style";
import Sidebar from "../../components/sidebar";
import ScrollArea from "./scrollArea";

const Home = () => {
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["home"], [lang]);

  return (
    <HomeStyled>
      <Sidebar lang={lang} langData={langData.sidebar} />
      <ScrollArea />
    </HomeStyled>
  );
};

export default Home;
