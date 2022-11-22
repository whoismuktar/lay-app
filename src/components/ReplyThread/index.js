import { Divider } from "antd";
import React from "react";
import Reply from "./Reply";

function ReplyThread({ comments=[] }) {
  return (
    <div className="comment-thread">
      {
      comments.map((comment, i) => {
        return(
          <>
            <Reply key={i} comment={comment} />
            {
              i !== comments.length-1 && <Divider className="comment-thread__divider" />
            }
          </>
        )
      })
    }
    </div>
  );
}

export default ReplyThread;
