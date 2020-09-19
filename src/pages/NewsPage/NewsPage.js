import React from "react";
import "./newsPage.css";
import { useLocation, Link } from "react-router-dom";

const NewsPage = () => {
  const location = useLocation();
  const { title, urlToImage, author, content, publishedAt } = location.state;

  const date = publishedAt.substring(0, 10);

  return (
    <article className="news-page">
      <div className="news-page__title">{title}</div>
      <div className="news-page__img--wrapper">
        <img
          className="news-page__img"
          src={urlToImage}
          alt="pictureOfNews"
        ></img>
      </div>
      <div className="news-page__content">{content}</div>
      <p className="news-page__signuture">
        {author}, {date}
      </p>

      <Link
        className="news-page__link"
        to={{
          pathname: "/TopNewsPage",
        }}
      >
        &lt; Back to list
      </Link>
    </article>
  );
};

export default NewsPage;
