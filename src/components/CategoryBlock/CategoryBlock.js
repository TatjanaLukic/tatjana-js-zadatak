import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import CountryContext from "../../context/countryContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {getUrl} from "../../utils/helpers";
import Slide from "../Slide/Slide";
import { ReactComponent as IconExpand } from "../../assets/images/expand.svg";
import { ReactComponent as IconCollapse } from "../../assets/images/collapse.svg";
import Loading from "../../components/Loading/Loading";

import "./categoryBlock.css";

const CategoryBlock = ({ categoryName }) => {
  const country = useContext(CountryContext);

  const [active, setActive] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    axiosInstance
      .get(getUrl(country.country, categoryName, 5))
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [country.country]);

  const onClickRight = () => {
    if (currentSlide < 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const onClickLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleCategory = () => {
    setActive(!active);
  };

  const newsSlides = news.map((data, inx) => {
    return (
      <Slide
        key={inx}
        isCurrent={inx === currentSlide}
        title={data.title}
        urlToImage={data.urlToImage}
        description={data.description}
        author={data.author}
        content={data.content}
        publishedAt={data.publishedAt}
        parentPath="/CategoriesPage"
      />
    );
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="category-block">
      <Link
        className="category-block__link"
        to={{
          pathname: `/CategoriesPage/TopNewsPage`,
          state: { categoryName },
        }}
      >
        {categoryName}
      </Link>

      <span
        className={
          active ? "category-block__icon--show" : "category-block__icon--hide"
        }
        onClick={toggleCategory}
      >
        <IconCollapse />
      </span>

      <span
        className={
          active ? "category-block__icon--hide" : "category-block__icon--show"
        }
        onClick={toggleCategory}
      >
        <IconExpand />
      </span>

      <div className={active ? "category-block--show" : "category-block--hide"}>
        <div className="category-block__slides--wrapper">
          <div className="category-block__nav" onClick={onClickLeft}>
            &lt;
          </div>
          <div className="category-block__slides">{newsSlides}</div>
          <div className="category-block__nav" onClick={onClickRight}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryBlock.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryBlock;
