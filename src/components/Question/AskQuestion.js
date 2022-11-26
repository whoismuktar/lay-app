import { Button, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import editorToolbar from "../../Config/editorToolbar";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { FiImage } from "react-icons/fi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GoMention } from "react-icons/go";

function AskQuestion({ modalActive = false }) {
  const [isModalActive, setIsModalActive] = useState(!modalActive);
  const [editorActive, setEditorActive] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState({
    htmlValue: "<p></p>\n",
    editorState: EditorState.createEmpty(),
  });

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

  // remove any detected linebreak
  useEffect(() => {
    const isLineBreak = title.match(/\n/g);
    if (isLineBreak) {
      setTitle(title.replaceAll("\n", ""));
    }
  }, [title]);

  useEffect(() => {
    console.log(description);
  }, [description]);

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
      >
        <div className="input__wrapper input__wrapper--bottom-border">
          <div className="intro-label">Ask for a lay answer</div>
          <TextArea
            className="ask-question__title"
            maxLength={70}
            placeholder="Question of the day?"
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
