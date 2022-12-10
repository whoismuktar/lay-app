import React, { useState } from "react";
import { Button, Input } from "antd";
import UserCard from "../UserCard";
import {FaComment} from "react-icons/fa"
import { Filter } from "../../Helper";

const { TextArea } = Input;

function InputBox(props) {
  const [comment, setComment] = useState("")
  const canSend = () => {
    const isWhiteSpaces = comment.trim()
    const valid = comment.length > 1 && isWhiteSpaces !== ""

    if (valid) {
      return "can-send"
    }
    return ""
  };


  return <div className="input-box">
    <UserCard user={Filter.currentUser} />

    <TextArea
        className="input-box__input"
        placeholder="Add lay response..."
        maxLength="200"
        autoSize={{
          minRows: 1,
        }}
        value={comment}
        onChange={(e)=> setComment(e.target.value)}
      />

      <FaComment className={`send-comment ${canSend()}`} />
  </div>;
}

export default InputBox;
