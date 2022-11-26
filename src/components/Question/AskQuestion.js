import { Button, Input, Modal, Popconfirm, Tag, AutoComplete } from "antd";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import editorToolbar from "../../Config/editorToolbar";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { FiImage } from "react-icons/fi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GoMention } from "react-icons/go";
import {
  IoIosAddCircleOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { AiFillTags } from "react-icons/ai";

function AskQuestion({ modalActive = false, askUser }) {
  const [isModalActive, setIsModalActive] = useState(!modalActive);
  const [editorActive, setEditorActive] = useState(false);
  const [addOwnTag, setAddOwnTag] = useState(false);
  const [questionTags, setQuestionTags] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState({
    htmlquery: "<p></p>\n",
    editorState: EditorState.createEmpty(),
  });

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
  const [tagsBank, setTagsBank] = useState(getTagsBank);
  const [tagVal, setTagVal] = useState("");

  const onTagValClear = () => setTagVal("");

  const placeholder = askUser
    ? `Ask ${askUser.firstName} a question?`
    : "Question of the day?";

  const onEditorStateChange = (editorValue) => {
    const editorStateInHtml = draftToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );

    setDescription({
      htmlValue: editorStateInHtml,
      editorState: editorValue,
    });
  };

  const removeLineBreak = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

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

  const TextArea = Input.TextArea;

  const LeftFooter = () => {
    return (
      <div className="modal-left-footer">
        <FiImage />

        <MdOutlineEmojiEmotions />
        <GoMention />
      </div>
    );
  };
  const RightFooter = () => {
    return (
      <div className="modal-right-footer">
        <Button type="text" style={{ fontWeight: 500 }}>
          Cancel
        </Button>
        <Button className="app-btn">Ask</Button>
      </div>
    );
  };

  const QuestionTips = () => {
    return (
      <ul className="question-tips tooltip">
        <li>Make sure your question has not been asked already</li>
        <li>Keep your question short and to the point</li>
        <li>Double-check grammar and spelling</li>
      </ul>
    );
  };

  return (
    <div className="question ask-question">
      <Modal
        open={isModalActive}
        wrapClassName="app-editor"
        style={{ top: "30%" }}
        className="app-modal"
        closable={false}
        okText="Ask"
        cancelButtonProps={{
          type: "text",
        }}
        footer={[<LeftFooter />, <RightFooter />]}
        destroyOnClose
      >
        <div className="input__wrapper input__wrapper--bottom-border">
          {askUser && (
            <div className="ask-user">
              <span>Ask Emma</span>
            </div>
          )}

          <div className="intro-label align-center">
            <span>Ask for a lay answer</span>
            <Popconfirm
              className="question-tip"
              placement="right"
              title={QuestionTips}
              showCancel={false}
              okText="Got it"
            >
              <IoMdInformationCircleOutline className="after-icon" />
            </Popconfirm>
          </div>

          <TextArea
            className="ask-question__title"
            maxLength={70}
            placeholder={placeholder}
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

        <div className="ask-question-tags align-center">
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
                  height: 27
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

        <div className="show-description">
          {!editorActive && (
            <span
              className="collapse-editor"
              onClick={() => setEditorActive(true)}
            >
              Give More Details?
            </span>
          )}

          {editorActive && (
            <span
              className="collapse-editor"
              onClick={() => setEditorActive(false)}
            >
              Ignore Details?
            </span>
          )}
        </div>

        {editorActive && (
          <Editor
            editorState={description.editorState}
            onEditorStateChange={onEditorStateChange}
            toolbar={editorToolbar}
            wrapperClassName="editor-wrapper"
            editorClassName="editor-item"
            placeholder="Keep it simple"
          />
        )}
      </Modal>
    </div>
  );
}

export default AskQuestion;
