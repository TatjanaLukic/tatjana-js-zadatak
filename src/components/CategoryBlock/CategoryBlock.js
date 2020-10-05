import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import CountryContext from "../../context/countryContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getUrl } from "../../utils/helpers";
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
  const maxSlides = 5;

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        const response = await axiosInstance.get(
          getUrl(country.country, categoryName, maxSlides)
        );

        const data = response.data;
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoryNews();
  }, [country.country, categoryName]);

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
    <div className="category-block" data-testid="categoryBlock">
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
        data-testid="collapse"
      >
        <IconCollapse />
      </span>

      <span
        className={
          active ? "category-block__icon--hide" : "category-block__icon--show"
        }
        onClick={toggleCategory}
        data-testid="expand"
      >
        <IconExpand />
      </span>

      <div className={active ? "category-block--show" : "category-block--hide"} data-testid="slider">
        <div className="category-block__slides--wrapper">
          <div
            className={
              currentSlide === 0
                ? "category-block__nav cb__nav--disable"
                : "category-block__nav"
            }
            data-testid="nav-left"
            onClick={onClickLeft}
          >
            &lt;
          </div>
          <div className="category-block__slides">{newsSlides}</div>
          <div
            className={
              currentSlide === maxSlides - 1
                ? "category-block__nav cb__nav--disable"
                : "category-block__nav"
            }
            data-testid="nav-right"
            onClick={onClickRight}
          >
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
