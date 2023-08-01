import React, { useMemo } from "react";
import TopSliderMain from "./topSliderMain/index";
import ElectricSaws from "./electricSaws";
import SalesHits from "./salesHits";
import { ScrollAreaView } from "./style";
import locale from "../../localization/locale.json";
import Selectors from "../../redux/selectors";
import CategoryProducts from "./categoryProducts";
import NewsSection from "./news";
import AboutSection from "./about";
import Questions from "./questions";

const ScrollArea = () => {
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["home"], [lang]);
  return (
    <ScrollAreaView>
      <TopSliderMain langData={langData} lang={lang} />
      <ElectricSaws langData={langData} lang={lang} />
      <SalesHits langData={langData} lang={lang} />
      <CategoryProducts langData={langData} lang={lang} />
      <NewsSection langData={langData} lang={lang} />
      <AboutSection langData={langData} lang={lang} />
      <Questions langData={langData} lang={lang} />
    </ScrollAreaView>
  );
};

export default ScrollArea;
