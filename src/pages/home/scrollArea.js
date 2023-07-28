import React, { useMemo } from "react";
import TopSliderMain from "./../../components/topSliderMain/index";
import ElectricSaws from "../../components/electricSaws";
import SalesHits from "../../components/salesHits";
import { ScrollAreaView } from "./style";
import locale from "../../localization/locale.json";
import Selectors from "../../redux/selectors";

const ScrollArea = () => {
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["home"], [lang]);
  return (
    <ScrollAreaView>
      <TopSliderMain langData={langData} lang={lang} />
      <ElectricSaws langData={langData} lang={lang} />
      <SalesHits langData={langData} lang={lang} />
    </ScrollAreaView>
  );
};

export default ScrollArea;
