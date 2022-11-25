import React, { useEffect, useState } from "react";
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
function TagList({ truncate, len = 5 }) {
  const [list, setList] = useState(tagsBank)

  
  useEffect(() => {
    const updateList = ()=> setList(tagsBank.slice(0, len))
    if (truncate) {
      updateList()
    }
  }, [len, truncate])
  
  const expand = (qty = 2) => {
    setList(tagsBank.slice(0, list.length + qty))
  };

  return (
    <>
      <ul className="tag-list tags">
        {list.map((tag, i) => (
          <li key={i} className="tag" id={tag.title.replaceAll(" ", "-")}>
            <div className="tag__title">{tag.title}</div>
            <div className="tag__subtitle dflex">
              <div className="tag__subtitle-count">
                {Filter.formatLargeNumber(tag.count)}
              </div>
              <div className="tag__subtitle-text"> - Q&A</div>
            </div>
          </li>
        ))}
      </ul>
      {(truncate && list.length < tagsBank.length) && (
        <div className="sidebar__more" onClick={() => expand(3)}>
          More
        </div>
      )}

      {((tagsBank.length > len && tagsBank.length === list.length)) && (
        <div className="sidebar__more" onClick={() => expand(3)}>
          See All
        </div>
      )}
    </>
  );
}

export default TagList;
