import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { getUrl } from "../../utils/helpers";
import NewsTile from "../../components/NewsTile/NewsTile";
import CountryContext from "../../context/countryContext";
import Loading from "../../components/Loading/Loading";

import "./topNewsPage.css";

const TopNewsPage = () => {
  const country = useContext(CountryContext);

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const countryName =
    country.country === "us" ? "United States" : "Great Britain";

  let categoryName = "";
  const location = useLocation();
  if (location.state) {
    categoryName = location.state.categoryName
      ? location.state.categoryName
      : "";
  }

  const title = categoryName
    ? `Top ${categoryName} news from ${countryName}`
    : `Top news from ${countryName}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get(
          getUrl(country.country, categoryName, 20)
        );
        const data = response.data;
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, [country.country, categoryName]);

  const newsTiles = news.map((data, inx) => {
    return (
      <NewsTile
        key={inx}
        title={data.title}
        urlToImage={data.urlToImage}
        description={data.description}
        author={data.author}
        content={data.content}
        publishedAt={data.publishedAt}
        parentPath={categoryName ? "/CategoriesPage" : "/TopNewsPage"}
        categoryName={categoryName}
      />
    );
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="top-news-page">
      <h1 className="top-news-page__title">{title}</h1>
      <div className="top-news-page__tiles">{newsTiles}</div>
    </div>
  );
};

export default TopNewsPage;
