import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./newsTile.css";

const NewsTile = ({
  title,
  urlToImage,
  description,
  author,
  content,
  publishedAt,
  parentPath,
  categoryName,
}) => {
  return (
    <div className="news-tile--wrapper" data-testid="news-tile">
      <div className="news-tile">
        <h5 className="news-tile__title">{title}</h5>
        <div className="news-tile__img--wrapp">
          <img
            className="news-tile__img"
            src={urlToImage}
            alt="pictureOfNews"
          ></img>
        </div>
        <div className="news-tile__desc--wrapp">
          <div className="news-tile__desc" data-testid="description">{description}</div>
          <Link
            className="news-tile__link"
            to={{
              pathname: `${parentPath}/NewsPage`,
              state: {
                title,
                urlToImage,
                author,
                content,
                publishedAt,
                parentPath: `${parentPath}/TopNewsPage`,
                categoryName,
              },
            }}
          >
            More &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

NewsTile.propTypes = {
  title: PropTypes.string,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default NewsTile;
