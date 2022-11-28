import { Input } from "antd";
import React, { useEffect, useState } from "react";
import UserCard from "../UserCard";
import { Filter } from "../../Helper";

function QuestionInput({ placeholder, isComp=false }) {
  const [title, setTitle] = useState("");

  const TextArea = Input.TextArea;
  const getPlaceholder = placeholder || "Question of the day?";

  const removeLineBreak = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  // remove any detected linebreak
  useEffect(() => {
    const isLineBreak = title.match(/\n/g);
    if (isLineBreak) {
      setTitle(title.replaceAll("\n", ""));
    }
  }, [title]);

  return (
    <div
      className={[
        "question question-input",
        `${isComp ? "is-comp" : "app-card align-center"}`,
      ].join(" ")}
    >
      <br />
      {!isComp && <UserCard user={Filter.currentUser} />}
      <TextArea
        className="ask-question__title"
        maxLength={70}
        placeholder={getPlaceholder}
        autoSize={{
          minRows: 1,
          maxRows: 3,
        }}
        value={title}
        bordered={false}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={removeLineBreak}
      />
    </div>
  );
}

export default QuestionInput;
