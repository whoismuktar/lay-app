import React, { createRef } from "react";
import { Button, Input, Tag } from "antd";
import { BiSearch } from "react-icons/bi";
import styles from "../styles/landing.module.scss";
import { useState } from "react";
import ActivityMap from "../components/ActivityMap";
import { useEffect } from "react";
import { useRef } from "react";
import SignUpCTABanner from "../components/FeaturedQuestions";

function Landing(props) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [layerSelected, setLayerSelected] = useState(0);
  const [slideTimer, setSlideTimer] = useState(0);
  const [startTimer, setStartTimer] = useState(0);

  const slideDuration = 4000
  const activeRef = useRef();

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
      name: "Emma Mia",
      specialty: "Ted Talk",
      questions: 100,
      answers: 730,
      contributions: 830,
      image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Traveling",
    },
    {
      name: "Dele Momodu",
      specialty: "Youtuber",
      questions: 100,
      answers: 730,
      contributions: 830,
      image: "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      category: "Photography",
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
  ];

  const ContributorSlide = ({ person, idx }) => {
    return (
      <div
        onClick={() => selectSlide(idx)}
        className={`${styles.contributor_layer} ${
          idx === layerSelected && styles.contributor_layer__active
        }`}
        style={{ backgroundImage: `url(${person.image})` }}
        ref={idx === layerSelected ? activeRef : createRef()}
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

  const selectSlide = (idx) => {
    setLayerSelected(idx)
    setSlideTimer(null)
    clearInterval(slideTimer)
    
    let next2 = 0;
    console.log("next2++:", next2);

    setSlideTimer(() =>
      setInterval(() => {
        next2 = next2 + 1 === 3 ? 0 : next2 + 1;
        activeRef.current.style.width = "550px";
        setLayerSelected(next2);
        console.log(activeRef.current);
      }, slideDuration)
    );
  };

  // Init Timer
  useEffect(() => {
    setStartTimer(true);

    return () => {
      return setStartTimer(false);
    };
  }, []);

  // Start Timer
  useEffect(() => {
    if (startTimer) {
      let next2 = 0;
      console.log("next2++:", next2);

      setSlideTimer(() =>
        setInterval(() => {
          next2 = next2 + 1 === 3 ? 0 : next2 + 1;
          activeRef.current.style.width = "550px";
          setLayerSelected(next2);
          console.log(activeRef.current);
        }, slideDuration)
      );
    }
  }, [startTimer]);

  useEffect(() => {
    activeRef.current.style.width = "540px";
  }, [layerSelected]);

  return (
    <div className={styles.landing}>
      <div className={styles.hero_wrapper}>
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
                    size={25}
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
      </div>

      <div className={`wave-container ${styles.landing__activity_map}`}>
        <ActivityMap />
      </div>

      <div
        className={`align-center justify-space-between ${styles.featured_contributors}`}
      >
        <div className={styles.layers_cta}>
          <div className={styles.layers_cta__titleWrapper}>
            <div className={styles.layers_cta__title}>How Simple</div>
            <div className={styles.layers_cta__subtitle}>Can You Answer?</div>
          </div>
          <Button
            className="app-btn"
            size="large"
            style={{ height: 50, fontWeight: 500 }}
          >
            Join Community
          </Button>
        </div>

        <div className={styles.layers}>
          <div className={styles.layers_wrapper}>
            {featuredContributors.map((person, i) => {
              return (
                <ContributorSlide
                  key={i}
                  person={person}
                  idx={i}
                />
              );
            })}
          </div>
          <div className={styles.layers_pickers}>
            {featuredContributors.map((person, i) => {
              return (
                <div
                  className={`${styles.layers_pickers_item} ${
                    i === layerSelected && styles.layers_pickers_item__active
                  }`}
                  onClick={() => selectSlide(i)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container ">
        <SignUpCTABanner />
      </div>

    </div>
  );
}

export default Landing;
