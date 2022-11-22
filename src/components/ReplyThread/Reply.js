import React from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { Filter } from "../../Helper";
import UserCard from "../UserCard";

const recursiveReply = (reply) => {
  return <Reply comment={reply} />;
};
function Reply({ comment }) {
  return (
    <>
      <div className="align-center">
        <div className="vote-action">
          <div className="vote-action__vote__btn vote-action__upvote">
            <BiUpvote />
          </div>
          <div className="vote-action__count">0</div>
          <div className="vote-action__vote__btn vote-action__downvote">
            <BiDownvote />
          </div>
        </div>

        <div className="comment">
          <div className="comment__top align-center">
            <UserCard user={comment.user} />

            <div>
              <span className="user__name">
                {Filter.getFullName(comment.user)}
                {comment.replies && comment.replies.length}
              </span>
              <div className="comment__answered_date comment__time">
                {Filter.formatDateFromNowShort(new Date())} ago
              </div>
            </div>
          </div>

          <div
            className="comment__text"
            dangerouslySetInnerHTML={{ __html: comment.comment.title }}
          />

          <div className="comment__action">
            {/* <span className="comment__reply">Reply</span> */}
            <span className="comment__flag">Flag</span>
          </div>

          {/* {comment.replies && recursiveReply(comment.replies)} */}
          {/* {JSON.stringify(comment)} */}
        </div>

        <div className="dflex comment__side-action">
          <div className="comment__like">
            {!comment.liked && <AiOutlineHeart />}
            {comment.liked && <AiTwotoneHeart className="liked" />}
          </div>
          <div className="more-option">
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reply;
