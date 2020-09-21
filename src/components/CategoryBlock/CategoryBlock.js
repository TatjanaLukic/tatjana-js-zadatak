import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { manyNewsMock } from "../../__mocks__/manyNewsMock";
import Slide from "../Slide/Slide";
import { ReactComponent as IconExpand } from "../../assets/images/expand.svg";
import { ReactComponent as IconCollapse } from "../../assets/images/collapse.svg";

import "./categoryBlock.css";

const CategoryBlock = ({ categoryName }) => {
  const [active, setActive] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const news = manyNewsMock.map((data, inx) => {
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
  return (
    <div className="category-block">
      <Link
        className="category-block__link"
        to={{
          pathname: `/NewsPage`,
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
          <div className="category-block__nav" onClick={onClickRight}>
            &lt;
          </div>
          <div className="category-block__slides">{news}</div>
          <div className="category-block__nav" onClick={onClickLeft}>
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
