import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import "./topNewsPage.css";
import NewsTile from "../../components/NewsTile/NewsTile";
import CountryContext from "../../context/countryContext";
import Loading from "../../components/Loading/Loading";

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
      : undefined;
  }

  const categoryNameUrlParam = categoryName ? `&category=${categoryName}` : "";

  const title = categoryName
    ? `Top ${categoryName} news from ${countryName}`
    : `Top news from ${countryName}`;

  useEffect(() => {
    console.log("useEffect called");
    axiosInstance
      .get(`/top-headlines?country=${country.country}&{categoryNameUrlParam}`)
      .then((response) => {
        const data = response.data;
        setNews(data.articles);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [country.country]);

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
