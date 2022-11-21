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
          </>
        )
      })
    }
    </div>
  );
}

export default ReplyThread;
