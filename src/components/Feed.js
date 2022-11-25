import React from "react";
import { useState } from "react";
import { Image, Divider, Tooltip } from "antd";
import { Filter } from "../Helper";
import { GrDown } from "react-icons/gr";
import { HiOutlineChevronRight } from "react-icons/hi";
import { BsFillBookmarkFill, BsFlagFill, BsFillBellFill, BsTranslate } from "react-icons/bs";
import { TfiLink } from "react-icons/tfi";
import { IoMdShareAlt } from "react-icons/io";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import "../Assets/styles/feed.scss";
import UserCard from "./UserCard";
import UserCardGroup from "./UserCardGroup";
import InputBox from "./InputBox";
import ReplyThread from "./ReplyThread";

function Feed({ feed, i, collapse }) {
  const answers = feed.answers;
  const userGroup = answers.map((ans) => ans.user);

  const [ openAnswers, setOpenAnswers] = useState(!!collapse);
  const openNow = () => {
    setOpenAnswers(!openAnswers);
  }

  return (
    <div key={i} className="app-card feed feed-card">
      <div className="feed__vote vote-action">
        <div className="vote-action__vote__btn vote-action__upvote">
          <BiUpvote />
        </div>
        <div className="vote-action__count">0</div>
        <div className="vote-action__vote__btn vote-action__downvote">
          <BiDownvote />
        </div>
      </div>

      <div className="feed__wrapper">
        <div className="feed__title">{feed.title}</div>

        <div className="feed__top">
          <div className="feed__asked_by_avatar">
            <UserCard user={feed.askedBy} preview />
          </div>

          <div className="feed__details">
            <div className="feed__asked_by_name">
              {`${feed.askedBy.firstName} ${feed.askedBy.lastName}`}
            </div>
            <div className="feed__meta">
              <div className="feed__answered_by">
                Answered by Mr A, Ms B & {17 + (i + 1)} more
              </div>

              <span className="bullet-separator">&bull;</span>

              <div className="feed__answered_date">
                {Filter.formatDateFromNowShort(feed.created_at)} ago
              </div>
            </div>
          </div>
        </div>

        <div
          className="feed__description"
          dangerouslySetInnerHTML={{ __html: feed.description }}
        />

        {feed.image && (
          <div className="feed__image">
            <Image width={200} src={feed.image} />
          </div>
        )}

        <div className="feed__footer">
          <div className="feed__icons">
            <Tooltip title="Bookmark">
              <BsFillBookmarkFill className="feed__icon" />
            </Tooltip>
            <Tooltip title="Copy Link">
              <TfiLink className="feed__icon" />
            </Tooltip>
            <Tooltip title="Share">
              <IoMdShareAlt className="feed__icon" />
            </Tooltip>
            <Tooltip title="Flag">
              <BsFlagFill className="feed__icon" />
            </Tooltip>
            <Tooltip title="Subscribe">
              <BsFillBellFill className="feed__icon" />
            </Tooltip>
            <Tooltip title="Translate">
              <BsTranslate className="feed__icon" />
            </Tooltip>
          </div>

          <UserCardGroup users={userGroup} />
        </div>

        <div className="feed__answers">
          <Divider orientation="center" plain className="qa-divider">
            <div onClick={openNow} className="inner">
              <span className="__text">Lay Answers</span>
              { openAnswers ? <GrDown className="__icon" /> :
              <HiOutlineChevronRight className="__icon" />}
            </div>
          </Divider>

          <InputBox />

          {openAnswers && <ReplyThread comments={answers} />}
        </div>
      </div>
    </div>
  );
}

export default Feed;
