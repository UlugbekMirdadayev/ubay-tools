import React, { useCallback, useEffect } from "react";
import { NewsSectionContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import Selectors from "../../../redux/selectors";
import { api } from "../../../api";
import { useDispatch } from "react-redux";
import { setNews } from "../../../redux/news-slice";
import moment from "moment/moment";
import { API, skeletionData } from "../../../utils/constants";

const NewsSection = ({ lang, langData }) => {
  const dispatch = useDispatch();
  const news = Selectors.useNews();

  const getNews = useCallback(() => {
    if (news?.length) return null;
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
  }, [dispatch, news?.length]);

  useEffect(() => {
    return () => {
      getNews();
    };
  }, [getNews]);
  return (
    <NewsSectionContainer>
      <h1>{langData.news_title}</h1>
      <Swiper slidesPerView={"auto"} className="row">
        {news?.length
          ? news?.map((single, index) => (
              <SwiperSlide key={single?.ident} className="card">
                <Link to={`/news/${index}`}>
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
      <Link to={"/news"} className="show_all">
        {langData.all_news}
      </Link>
    </NewsSectionContainer>
  );
};

export default NewsSection;
