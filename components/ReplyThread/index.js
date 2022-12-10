import { Divider } from "antd";
import React from "react";
import Reply from "./Reply";

function ReplyThread({ comments = [] }) {
  return (
    <div className="comment-thread">
      {comments.map((comment, i) => {
        return (
          <span key={i}>
            <Reply key={i} comment={comment} />
            {i !== comments.length - 1 && (
              <Divider className="comment-thread__divider" />
            )}
          </ span>
        );
      })}
    </div>
  );
}

export default ReplyThread;
