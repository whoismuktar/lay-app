import React from "react";
import QuestionList from "./QuestionList";

function SignUpCTABanner(props) {
  return (
    <div className="featuredQuestions">
      <div className="title text-center">The Lay App Community Posts</div>
      <div className="subtitle text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at
        facilis inventore rem Lorem ipsum dolor sit
      </div>

      <QuestionList hideDescription showSideCount />
    </div>
  );
}

export default SignUpCTABanner;
