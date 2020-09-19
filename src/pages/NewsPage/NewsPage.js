import React from "react";
import "./newsPage.css";
import { useLocation } from "react-router-dom";

const NewsPage = () => {
  const location = useLocation();
  const { title, urlToImage, author, content, publishedAt } = location.state;

  const date = publishedAt.substring(0, 10);

  return (
    <article className="news-page">
      <div className="news-page__title">{title}</div>
      <div className="news-tile__img--wrapper">
        <img
          className="news-tile__img"
          src={urlToImage}
          alt="pictureOfNews"
        ></img>
      </div>
      <div className="news-page__content">{content}</div>
      <p className="news-page__signuture">
        {author}, {date}
      </p>
    </article>
  );
};

export default NewsPage;
