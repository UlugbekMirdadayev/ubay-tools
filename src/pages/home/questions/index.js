import React, { useCallback, useEffect } from "react";
import { QuestionSection } from "./style";
import { TelegramIcon } from "../../../components/icon";
import Accord from "../../../components/accord";
import { api } from "../../../api";
import Selectors from "../../../redux/selectors";
import { useDispatch } from "react-redux";
import { setQuestions } from "../../../redux/questions-slice";
import { toast } from "react-toastify";

const Questions = ({ langData, lang }) => {
  const dispatch = useDispatch();
  const questions = Selectors.useQuestions();

  const getQuestions = useCallback(() => {
    if (questions?.length) return;
    api
      .get_questions()
      .then(({ data }) => {
        if (data?.length) {
          dispatch(
            setQuestions(
              data?.sort(
                (a, b) =>
                  new Date(a?.updatedAt)?.getTime() -
                  new Date(b?.updatedAt)?.getTime()
              )
            )
          );
        } else {
          console.log(data);
          dispatch(setQuestions([]));
        }
      })
      .catch(({ message }) => {
        toast.error(message);
        console.log(message);
      });
  }, [dispatch, questions?.length]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);
  return (
    <QuestionSection>
      <div className="header">
        <h1 className="title">{langData.questions_title}</h1>
        <div className="between">
          <div className="row">
            <a href={"tel:+998 90 000 50 20"}>
              <span>+998 90 000 50 20</span>
              <p>{langData.online_time}</p>
            </a>
            <a
              className="primary"
              href={"https://t.me/ubay_tools"}
              target="_blank"
              rel="noreferrer nooperer"
            >
              <div className="icon">
                <TelegramIcon color="#015CCF" />
              </div>
              <span>{langData.tg_questions}</span>
            </a>
          </div>
        </div>
      </div>
      {questions?.length ? (
        questions?.map((question) => (
          <Accord
            key={question?._id}
            title={lang === "uz" ? question?.question_uz : question?.question}
            body={lang === "uz" ? question?.answer_uz : question?.answer}
          />
        ))
      ) : (
        <div className="isLoading empty" />
      )}

      <div className="row ismobile">
        <a href={"tel:+998 90 000 50 204"}>
          <span>+998 90 000 50 20</span>
          <p>{langData.online_time}</p>
        </a>
        <a
          className="primary"
          href={"https://t.me/ubay_tools"}
          target="_blank"
          rel="noreferrer nooperer"
        >
          <div className="icon">
            <TelegramIcon color="#015CCF" />
          </div>
          <span>{langData.tg_questions}</span>
        </a>
      </div>
    </QuestionSection>
  );
};

export default Questions;
