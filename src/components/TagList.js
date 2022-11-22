import React from "react";
import { Filter } from "../Helper";

const tagsBank = [
  {
    title: "Jollof Rice",
    count: 40000,
  },
  {
    title: "Cuisine",
    count: 40000,
  },
  {
    title: "Anime",
    count: 40000,
  },
  {
    title: "Movies",
    count: 40000,
  },
  {
    title: "Politics",
    count: 40000,
  },
  {
    title: "Elon Musk",
    count: 40000,
  },
  {
    title: "World Cup",
    count: 40000,
  },
  {
    title: "JavaScript",
    count: 40000,
  },
  {
    title: "Hollywood",
    count: 40000,
  },
  {
    title: "Photography",
    count: 40000,
  },
  {
    title: "Afrobeats",
    count: 40000,
  },
];
function TagList(props) {
  return (
    <ul className="tag-list tags">
      {tagsBank.map((tag, i) => (
        <li key={i} className="tag" id={tag.title.replaceAll(" ", "-")}>
          <div className="tag__title">{tag.title}</div>
          <div className="tag__subtitle dflex">
            <div className="tag__subtitle-count">{ Filter.formatLargeNumber(tag.count)}</div>
            <div className="tag__subtitle-text"> - Q&A</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TagList;
