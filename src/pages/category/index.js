import React, { useCallback, useInsertionEffect, useMemo } from "react";
import { CategotyStyled } from "./style";
import { Link, useParams } from "react-router-dom";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setNews } from "../../redux/news-slice";
import moment from "moment/moment";
import { API, skeletionData } from "../../utils/constants";
import locale from "../../localization/locale.json";
import Sidebar from "../../components/sidebar";
import { ScrollAreaView } from "../home/style";

const Categoty = () => {
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["home"], [lang]);

  return (
    <CategotyStyled>
      <Sidebar lang={lang} langData={langData.sidebar} />
      <ScrollAreaView>
        <h1>Drellar kategoriyasi</h1>
      </ScrollAreaView>
    </CategotyStyled>
  );
};

export default Categoty;
