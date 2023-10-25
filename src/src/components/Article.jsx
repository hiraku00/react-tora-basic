import React, { useState } from "react";
import PublishButton from "./PublishButton";

const Article = ({ title, content }) => {
  const [isPublished, setIsPublished] = useState(false);
  const publishArticle = () => {
    setIsPublished(true);
  };

  return (
    <div>
      <h2>{title} </h2>
      <p>{content} </p>
      {/* <button onClick={() => setIsPublished(true)}>公開</button> */}
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  );
};

export default Article;
