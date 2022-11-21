import React from "react";
import { Filter } from "../../Helper";
import UserCard from "../UserCard";

const recursiveReply = (reply) => {
    return <Reply comment={reply} />
}
function Reply({ comment }) {
  return (
    <div className="comment">
      <div className="comment__top align-center">
        <UserCard user={comment.user} />

        <div>
          <span className="user__name">
            {Filter.getFullName(comment.user)}
            {comment.replies && comment.replies.length}
          </span>
          <div className="feed__answered_date">
            {Filter.formatDateFromNowShort(new Date())} ago
          </div>
        </div>
      </div>

      <div
        className="feed__description"
        dangerouslySetInnerHTML={{ __html: comment.comment.title }}
      />

      <div className="comment__action">
        <span className="comment__reply">Reply</span>
        <span className="comment__flag">Flag</span>
      </div>

      {/* {comment.replies && recursiveReply(comment.replies)} */}
      {/* {JSON.stringify(comment)} */}
    </div>
  );
}

export default Reply;
