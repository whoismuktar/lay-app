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
import QuestionInput from "./QuestionInput";

function AskQuestion({ modalActive = false, askUser }) {
  const [isModalActive, setIsModalActive] = useState(!modalActive);
  const [editorActive, setEditorActive] = useState(false);
  const [description, setDescription] = useState({
    htmlquery: "<p></p>\n",
    editorState: EditorState.createEmpty(),
  });


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
        <div className="input__wrapper">
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

          <QuestionInput isComp placeholder={placeholder} />
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
