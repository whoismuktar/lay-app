import { Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import editorToolbar from "../../Config/editorToolbar";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

function AskQuestion({ modalActive = false }) {
  const [isModalActive, setIsModalActive] = useState(!modalActive);
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

  useEffect(() => {
    console.log(description);
  }, [description]);

  return (
    <div className="question ask-question">
      <Modal
        open={isModalActive}
        wrapClassName="app-editor"
        className="app-modal"
        bodyStyle={{ height: "300px" }}
        closable={false}
      >
        <Input
          className="ask-question__title"
          maxLength={70}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Editor
          editorState={description.editorState}
          onEditorStateChange={onEditorStateChange}
          toolbar={editorToolbar}
          wrapperClassName="editor-wrapper"
          editorClassName="editor-item"
          placeholder="hello placeholder"
        />
      </Modal>
    </div>
  );
}

export default AskQuestion;
