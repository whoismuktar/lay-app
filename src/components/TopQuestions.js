import React from "react";
import QuestionList from "./QuestionList";
import "../Assets/styles/question.scss"

function TopQuestions(props) {
  return (
    <div className="top-questions page">
      <QuestionList />
    </div>
  );
}

export default TopQuestions;
