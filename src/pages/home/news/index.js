import React, { useCallback, useEffect } from "react";
import { NewsSectionContainer } from "./style";
import { Link } from "react-router-dom";
import Selectors from "../../../redux/selectors";
import { api } from "../../../api";
import { useDispatch } from "react-redux";
import { setNews } from "../../../redux/news-slice";
import moment from "moment/moment";
import { API, skeletionData } from "../../../utils/constants";
import { toast } from "react-toastify";

const NewsSection = ({ lang, langData }) => {
  const dispatch = useDispatch();
  const news = Selectors.useNews();

  const getNews = useCallback(() => {
    if (news?.length) return;
    api
      .get_news()
      .then(({ data }) => {
        if (data?.length) {
          dispatch(
            setNews(
              data?.sort(
                (a, b) =>
                  new Date(a?.createdAt)?.getTime() -
                  new Date(b?.createdAt)?.getTime()
              )
            )
          );
        } else {
          console.log(data);
        }
      })
      .catch(({ response: { data } = { data: { message: "Network error"} } }) => {
        toast.error(data?.message || JSON.stringify(data));
        console.log(data);
      });
  }, [dispatch, news?.length]);

  useEffect(() => {
    getNews();
  }, [getNews]);
  return (
    <NewsSectionContainer>
      <h1>{langData.news_title}</h1>
      <div className="row">
        {news?.length
          ? [...news]?.splice(0, 4)?.map((single) => (
              <div key={single?._id} className="card">
                <Link to={`/news/${single?._id}`}>
                  <div className="date">
                    {moment(single?.createdAt).format("DD.MM.YYYY HH:MM")}
                  </div>
                  <div className="title">
                    {lang === "uz" ? single?.title_uz : single?.title}
                  </div>
                  <img
                    src={API.baseURL_IMAGE + single?.image}
                    alt="news_image"
                  />
                  <div className="prg">
                    {lang === "uz" ? single?.short_uz : single?.short}
                  </div>
                </Link>
              </div>
            ))
          : skeletionData.slider.map((key) => (
              <div key={key} className="card isLoading" />
            ))}
      </div>
      <Link to={"/news"} className="show_all">
        {langData.all_news}
      </Link>
    </NewsSectionContainer>
  );
};

export default NewsSection;
