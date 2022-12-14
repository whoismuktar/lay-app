import React from "react";
import { Button, Input, Tag } from "antd";
import { BiSearch } from "react-icons/bi";
import styles from "../styles/landing.module.scss";
import { useState } from "react";
import ActivityMap from "../components/ActivityMap";
import { useEffect } from "react";

function Landing(props) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [layerSelected, setLayerSelected] = useState(0);
  const [slideTimer, setSlideTimer] = useState(0);

  const popularTags = [
    {
      title: "trump",
    },
    {
      title: "JavaScript",
    },
  ];

  const featuredContributors = [
    {
      name: "Dele Momodu",
      specialty: "Ted Talk",
      questions: 100,
      answers: 730,
      contributions: 830,
      image: "/images/avatar2.jpeg",
      category: "Cooking",
    },
    {
      name: "Dele Momodu",
      specialty: "Ted Talk",
      questions: 100,
      answers: 730,
      contributions: 830,
      image: "/images/avatar2.jpeg",
      category: "",
    },
    {
      name: "Emma Mia",
      specialty: "Youtuber",
      questions: 100,
      answers: 730,
      contributions: 830,
      image: "/images/avatar2.jpeg",
      category: "Cooking",
    },
  ];

  const ContributorSlide = ({ person, idx }) => {
    return (
      <div
        className={`${styles.contributor_layer} ${
          // idx === layerSelected && styles.contributor_layer__active
          idx === 0 && styles.contributor_layer__active
        }`}
        // style={{ backgroundImage: `url(${person.image})` }}
        style={{ backgroundImage: `url(/images/avatar2.jpeg)` }}
      >
        <div className={styles.contributor_layer__content}>
          <div className={styles.contributor_layer__meta}>
            <div className={styles.contributor_layer__category}>
              {person.category}
            </div>
            <div className={styles.contributor_layer__name}>{person.name}</div>
          </div>

          <div className={styles.contributor_layer__contribution}>
            <div className={styles.contributor_layer__contribution_count}>
              {person.contributions}
            </div>
            <div className={styles.contributor_layer__contribution_label}>
              Contributions
            </div>
          </div>
        </div>
      </div>
    );
  };

  const next =
    layerSelected + 1 === featuredContributors.length ? 0 : layerSelected + 1;

  // useEffect(() => {
  //   let started = true;
  //   if (started) {
  //     setSlideTimer(() => {
  //       setInterval(() => {
  //         setLayerSelected(next);
  //       }, 1000);
  //     });

  //   started = false;
  // }

  //   // () => clearInterval();
  // }, []);

  return (
    <div className={styles.landing}>
      <div className="wave-container" style={{ overflow: "hidden" }}>
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
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                suffix={
                  <BiSearch
                    size={30}
                    color={searchFocused ? "#000000" : "#777777"}
                  />
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
        className={`align-center justify-space-between ${styles.featured_contributors}`}
      >
        <div className={styles.layers_cta}>
          <div className={styles.layers_cta__titleWrapper}>
            <div className={styles.layers_cta__title}>How Simple</div>
            <div className={styles.layers_cta__subtitle}>Can You Answer?</div>
          </div>
          <Button className="app-btn" size="large" style={{height: 50, fontWeight: 500}}>Join Community</Button>
        </div>

        <div className={styles.layers}>
          {featuredContributors.map((person, i) => {
            return <ContributorSlide key={i} person={person} idx={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Landing;
