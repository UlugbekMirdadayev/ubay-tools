import React, { useCallback, useEffect, useMemo } from "react";
import { NewsSectionContainer } from "./style";
import { Link, useParams } from "react-router-dom";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setNews } from "../../redux/news-slice";
import moment from "moment/moment";
import { API, skeletionData } from "../../utils/constants";
import locale from "../../localization/locale.json";
import { DatePickerIcon } from "../../components/icon";
import { toast } from "react-toastify";

const News = () => {
  const dispatch = useDispatch();
  const news = Selectors.useNews();
  const lang = Selectors.useLang();
  const { id } = useParams();
  const langData = useMemo(() => locale[lang]["home"], [lang]);

  const singleNews = useMemo(
    () => news.find(({ _id }) => _id === id),
    [id, news]
  );

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
      {singleNews?._id ? (
        <div className="single">
          <div className="flex">
            <div className="item">
              <DatePickerIcon />
              <span>
                {moment(singleNews?.createdAt).format("HH:MM / DD.MM.YYYY")}
              </span>
            </div>
          </div>
          <div className="title">
            {lang === "uz" ? singleNews.title_uz : singleNews.title}
          </div>
          <div
            className="more"
            dangerouslySetInnerHTML={{
              __html: lang === "uz" ? singleNews?.desc_uz : singleNews?.desc,
            }}
          />
          <img
            className="img-single"
            src={API.baseURL_IMAGE + singleNews?.image}
            alt="news"
          />
        </div>
      ) : null}
      <div className="row">
        {news?.length
          ? news?.map((single) => (
              <div
                key={single?._id}
                style={
                  id === single?._id
                    ? { opacity: 0.5, pointerEvents: "none" }
                    : {}
                }
                className="card"
              >
                <Link to={`/news/${single?._id}`}>
                  <div className="date">
                    {moment(single?.datein).format("DD.MM.YYYY")}
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
    </NewsSectionContainer>
  );
};

export default News;
