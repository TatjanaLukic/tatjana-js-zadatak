import React, { useState, useContext, useEffect } from "react";
import CountryContext from "../../context/countryContext";
import axiosInstance from "../../utils/axiosInstance";
import NewsTile from "../../components/NewsTile/NewsTile";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./searchPage.css";

const SearchPage = () => {
  const country = useContext(CountryContext);

  const [news, setNews] = useState([]);
  const [term, setTerm] = useState("");

  const countryName =
    country.country === "us" ? "United States" : "Great Britain";

  useEffect(() => {
    axiosInstance
      .get(`/top-headlines?country=${country.country}&q=${term}`)
      .then((response) => {
        const data = response.data;
        setNews(data.articles);
      })
      .catch((error) => console.log(error))
  }, [term]);

  const onChangeHandler = (event) => {
    setTerm(event.target.value);
  };

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
        parentPath="/SearchPage"
      />
    );
  });

  return (
    <div className="search-page">
      <h1 className="search-page__title">
        Search top news from {countryName} by term
      </h1>
      <SearchBox term={term} onChangeHandler={onChangeHandler} />
      <div className="search-page__tiles">{newsTiles}</div>
    </div>
  );
};

export default SearchPage;
