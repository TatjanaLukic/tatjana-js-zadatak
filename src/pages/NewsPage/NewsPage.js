import React from "react";
import "./newsPage.css";
import { useLocation, Link } from "react-router-dom";

const NewsPage = () => {
  const location = useLocation();
  const { title, urlToImage, author, content, publishedAt, parentPath } = location.state;

  const date = publishedAt.substring(0, 10);

  return (
    <article className="news-page">
      <h1 className="news-page__title">{title}</h1>
      <div className="news-page__img--wrapper">
        <img
          className="news-page__img"
          src={urlToImage}
          alt="pictureOfNews"
        ></img>
      </div>
      <section className="news-page__content">{content}</section>
      <p className="news-page__signuture">
        {author}, {date}
      </p>

      <Link
        className="news-page__link"
        to={{
          pathname: {parentPath} ,
        }}
      >
        &lt; Back to list
      </Link>
    </article>
  );
};

export default NewsPage;
