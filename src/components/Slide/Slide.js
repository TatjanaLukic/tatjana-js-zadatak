import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./slide.css";

const Slide = ({
  key,
  isCurrent,
  title,
  urlToImage,
  description,
  content,
  author,
  publishedAt,
  parentPath,
}) => {
  return (
    <div className={isCurrent ? `slide-show` : `slide-hide`}>
      <h3 className="slide__title">
        <Link
          className="slide__link"
          to={{
            pathname: `${parentPath}/NewsPage`,
            state: {
              title,
              urlToImage,
              author,
              content,
              publishedAt,
              parentPath,
            },
          }}
        >
          {title}
        </Link>
      </h3>
      <img className="slide__image" src={urlToImage} alt="pictureOfNews"></img>
      <p className="slide__desc">{description}</p>
    </div>
  );
};

Slide.propTypes = {
  key: PropTypes.number.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default Slide;
