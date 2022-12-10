import React from "react";
import { Filter } from "../../Helper";
import UserCard from "../UserCard";

function QuestionCard({ question, idx, answerCardMode }) {
  const readMoreLen = 90;
  const isReadMore = question.description.length > 90;
  return (
    <div className="question question-card box-shadow1">
      <UserCard user={question.askedBy} />
      <div className="question-card__wrapper">
        <div className="question-card__title">{question.title}</div>

        {question.description && (
          <div
            className="question-card__description"
            dangerouslySetInnerHTML={{
              __html: Filter.truncateTxt(question.description, readMoreLen),
            }}
          />
        )}
        {question.description && isReadMore && (
          <div className="read-more">Read more</div>
        )}

        {!answerCardMode && (
          <div className="feed__meta">
            <div className="feed__answered_by">
              Answered by Mr A, Ms B & {17 + (idx + 1)} more
            </div>

            <span className="bullet-separator">&bull;</span>

            <div className="feed__answered_date">
              {Filter.formatDateFromNowShort(question.created_at)} ago
            </div>
          </div>
        )}

        {/* Answer Mode */}
        {answerCardMode && (
          <>
            <div className="feed__meta">
              <div className="feed__answered_by">
                Answered by Ema Mia &{" "}
                {/* Answered by {Filter.getFullName(question.answers[0].user)} &{" "} */}
                {17 + (idx + 1)} more
              </div>

              <span className="bullet-separator">&bull;</span>

              <div className="feed__answered_date">
                {Filter.formatDateFromNowShort(question.created_at)} ago
              </div>
            </div>

            <div>
              <div style={{fontWeight: 600}}>
                <em>Mia's Answer</em>
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                est iste consectetur velit nemo minus voluptates eos,
                repellendus ex repudiandae ratione esse mollitia eaque expedita
                in dolor ipsa provident corrupti.
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
