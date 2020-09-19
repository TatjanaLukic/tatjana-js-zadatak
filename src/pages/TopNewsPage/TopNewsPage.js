import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
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

  useEffect(() => {
    axiosInstance
      .get(`/top-headlines?country=${country.country}`)
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
      />
    );
  });

  if (loading) {
    return <Loading />
  }

  return (
    <div className="top-news-page">
      <h1 className="top-news-page__title">Top news from {countryName}</h1>
      <div className="top-news-page__tiles">{newsTiles}</div>
    </div>
  );
};

TopNewsPage.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string,
  }),
};

export default TopNewsPage;
