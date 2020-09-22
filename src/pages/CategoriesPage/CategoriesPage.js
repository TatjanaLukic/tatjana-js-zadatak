import React, { useContext } from "react";
import CountryContext from "../../context/countryContext";
import CategoryBlock from "../../components/CategoryBlock/CategoryBlock";
import "./categoriesPage.css";

const CategoriesPage = () => {
  const country = useContext(CountryContext);
  const countryName =
    country.country === "us" ? "United States" : "Great Britain";

  const categories = [
    "entertainment",
    "general",
    "health",
    "science",
    "sport",
    "technology",
  ];
  return (
    <div className="categories-page">
      <h1 className="categories-page__title">
        Top 5 news by categories from {countryName}
      </h1>
      <div className="categories-page__blocks--wrapper">
        {categories.map((categoryName, inx) => {
          return <CategoryBlock key={inx} categoryName={categoryName} />;
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;
