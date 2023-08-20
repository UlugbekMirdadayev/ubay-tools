import React, { useCallback, useEffect, useMemo } from "react";
import { NewsSectionContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link, useParams } from "react-router-dom";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setNews } from "../../redux/news-slice";
import moment from "moment/moment";
import { API, skeletionData } from "../../utils/constants";
import locale from "../../localization/locale.json";
import { DatePickerIcon } from "../../components/icon";

const News = () => {
  const dispatch = useDispatch();
  const news = Selectors.useNews();
  const lang = Selectors.useLang();
  const { id } = useParams();
  const langData = useMemo(() => locale[lang]["home"], [lang]);

  const singleNews = useMemo(
    () => news.find(({ ident }) => ident === +id),
    [id, news]
  );

  const getNews = useCallback(() => {
    console.log("get News");
    api
      .get_news({ news: {} })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          dispatch(setNews(data?.result));
        }
      })
      .catch((err) => {
        console.log(err, "err get News");
      });
  }, [dispatch]);

  useEffect(() => {
    getNews();
  }, [getNews]);
  return (
    <NewsSectionContainer>
      <h1>{langData.news_title}</h1>
      {singleNews?.ident ? (
        <div className="single">
          <div className="flex">
            <div className="item">
              <DatePickerIcon />
              <span>
                {moment(singleNews.datein).format("HH:MM / DD.MM.YYYY")}
              </span>
            </div>
          </div>
          <div className="title">{singleNews.title}</div>
          <div
            className="more"
            dangerouslySetInnerHTML={{
              __html: singleNews?.more?.replaceAll(
                "href",
                `rel="noopener noreferrer" target="_blank" href`
              ),
            }}
          />
          <img
            className="img-single"
            src={API.baseURL_IMAGE + singleNews?.photo}
            alt="news"
          />
        </div>
      ) : null}
      <Swiper slidesPerView={"auto"} className="row">
        {news?.length
          ? news?.map((single) => (
              <SwiperSlide
                key={single?.ident}
                style={
                  +id === single?.ident
                    ? { opacity: 0.5, pointerEvents: "none" }
                    : {}
                }
                className="card"
              >
                <Link to={`/news/${single?.ident}`}>
                  <div className="date">
                    {moment(single?.datein).format("DD.MM.YYYY")}
                  </div>
                  <div className="title">{single?.title}</div>
                  <img
                    src={API.baseURL_IMAGE + single?.photo}
                    alt="news_image"
                  />
                  <div className="prg">{single?.short || `Title ${lang}`}</div>
                </Link>
              </SwiperSlide>
            ))
          : skeletionData.slider.map((key) => (
              <SwiperSlide key={key} className="card isLoading" />
            ))}
      </Swiper>
    </NewsSectionContainer>
  );
};

export default News;
