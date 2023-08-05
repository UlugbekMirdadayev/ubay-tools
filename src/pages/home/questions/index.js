import React, { useCallback, useInsertionEffect } from "react";
import { QuestionSection } from "./style";
import { TelegramIcon } from "../../../components/icon";
import Accord from "../../../components/accord";
import { api } from "../../../api";
import Selectors from "../../../redux/selectors";
import { useDispatch } from "react-redux";
import { setQuestions } from "../../../redux/questions-slice";

const Questions = ({ langData, lang }) => {
  const dispatch = useDispatch();
  const questions = Selectors.useQuestions();

  const getQuestions = useCallback(() => {
    console.log('get questions');
    api
      .get_questions({ info_add: { type: 1 } })
      .then(({ data }) => {
        if (data?.res_id) {
          dispatch(setQuestions(data?.result));
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err, "err get questions");
      });
  }, [dispatch]);

  useInsertionEffect(() => {
    getQuestions();
  }, []);
  return (
    <QuestionSection>
      <div className="header">
        <h1 className="title">{langData.questions_title}</h1>
        <div className="between">
          <div className="row">
            <a href={"tel:+998 99 011 89 34"}>
              <span>+998 99 011 89 34</span>
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
      {questions.length ? (
        questions.map((question) => (
          <Accord
            key={question?.ident}
            title={question?.name}
            body={question?.value}
          />
        ))
      ) : (
        <div className="isLoading empty" />
      )}

      <div className="row ismobile">
        <a href={"tel:+998 99 011 89 34"}>
          <span>+998 99 011 89 34</span>
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
