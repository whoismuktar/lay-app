import React from "react";
import { Input, Tag } from "antd";
import { BiSearch } from "react-icons/bi";
import styles from "../styles/landing.module.scss";
import { useState } from "react";
import ActivityMap from "../components/ActivityMap";

function Landing(props) {
  const [focused, setFocused] = useState(false);

  const popularTags = [
    {
      title: "trump",
    },
    {
      title: "JavaScript",
    },
  ];

  return (
    <div className={styles.landing}>
      <div className="wave-container" style={{overflow: "hidden"}}>
        <div className="container allChildrenCenter text-center">
          <div className={styles.hero}>
            <div className={styles.hero__title}>
              Let’s build a forum where we give answers like we are talking to a
              lay man
            </div>

            <div className={styles.hero__subtitle}>
              Find answers, ask questions, and connect with the community
            </div>

            <div className="input-wrapper">
              <Input
                placeholder="Search Questions"
                className={`box-shadow1 ${styles["hero__searchInput"]}`}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                suffix={
                  <BiSearch size={30} color={focused ? "#000000" : "#777777"} />
                }
              />
            </div>
            <div
              className={`align-center justify-center ${styles.hero__popular_tags}`}
            >
              <span
                style={{ marginRight: 10, fontWeight: "600", color: "#777777" }}
              >
                Popular:
              </span>
              <div>
                {popularTags.map((tag, i) => {
                  return (
                    <Tag key={i} className="app-tag cursorPointer">
                      {tag.title}
                    </Tag>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.landing__activity_map}>
          <ActivityMap />
        </div>
      </div>
      <div
        className="container allChildrenCenter"
        style={{ backgroundColor: "aqua", height: 500 }}
      >
        Hello
      </div>
    </div>
  );
}

export default Landing;
