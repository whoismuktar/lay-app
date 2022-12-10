import { AutoComplete, Input, Tag } from "antd";
import React, { useEffect, useState } from "react";
import UserCard from "../UserCard";
import { Filter } from "../../Helper";
import { AiFillTags } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

const getTagsBank = () => {
  const tags = [
    {
      title: "Jollof Rice",
      count: 40000,
      value: "JollofRice",
    },
    {
      title: "Cuisine",
      count: 40000,
      value: "Cuisine",
    },
    {
      title: "Anime",
      count: 40000,
      value: "Anime",
    },
    {
      title: "Movies",
      count: 40000,
      value: "Movies",
    },
    {
      title: "Politics",
      count: 40000,
      value: "Politics",
    },
    {
      title: "Elon Musk",
      count: 40000,
      value: "ElonMusk",
    },
    {
      title: "World Cup",
      count: 40000,
      value: "WorldCup",
    },
    {
      title: "JavaScript",
      count: 40000,
      value: "JavaScript",
    },
    {
      title: "Hollywood",
      count: 40000,
      value: "Hollywood",
    },
    {
      title: "Photography",
      count: 40000,
      value: "Photography",
    },
    {
      title: "Afrobeats",
      count: 40000,
      value: "Afrobeats",
    },
  ];

  return tags.map((tag) => ({ ...tag, ...{ label: tag.title } }));
};

function QuestionInput({ placeholder, isComp = false }) {
  const [title, setTitle] = useState("");
  const [addOwnTag, setAddOwnTag] = useState(false);
  const [tagsBank, setTagsBank] = useState(getTagsBank);
  const [tagVal, setTagVal] = useState("");
  const [questionTags, setQuestionTags] = useState([]);

  const TextArea = Input.TextArea;
  const getPlaceholder = placeholder || "Get a simple answer to?";

  const removeLineBreak = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const onTagValClear = () => setTagVal("");
  const onTagSearch = (value) => {
    setTagVal(value);
  };

  const onTagSelect = (value, tag) => {
    if (!questionTags.includes(value)) {
      setQuestionTags([...questionTags, tag]);
      setAddOwnTag(false);

      onTagValClear();
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
      {!isComp && <UserCard user={Filter.currentUser} />}
      <div className="input__wrapper width100">
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
        <div
          className={[
            "ask-question-tags align-center",
            `${isComp ? "is-comp" : ""}`,
          ].join(" ")}
        >
          <AiFillTags className="before-icon" />
          {questionTags.map((tag, i) => {
            return (
              <span className="ask-question-tag">
                <Tag closable className="app-tag">
                  {tag.title}
                </Tag>
              </span>
            );
          })}

          <span className="ask-question-tag">
            {addOwnTag && (
              <AutoComplete
                options={tagsBank}
                style={{
                  width: 100,
                  height: 27,
                }}
                onSearch={onTagSearch}
                onSelect={onTagSelect}
                placeholder="search tag"
                value={tagVal}
                allowClear={onTagValClear}
                filterOption={(inputValue, tag) =>
                  tag.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                  -1
                }
              />
            )}
            {!addOwnTag && questionTags.length < 3 && (
              <IoIosAddCircleOutline
                className="dflex cursorPointer"
                onClick={() => setAddOwnTag(true)}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuestionInput;
