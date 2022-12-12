import React from "react";
import QuestionList from "../components/QuestionList";
// import "../Assets/styles/question.scss"

function TopQuestions(props) {
  return (
    <div className="top-questions page">
      <div className="page__title">Top Questions</div>
      <QuestionList />
    </div>
  );
}

export default TopQuestions;
