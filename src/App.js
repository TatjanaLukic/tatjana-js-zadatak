import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CountryContext from "../src/context/countryContext";
import Header from "./components/Header/Header";
import TopNewsPage from "./pages/TopNewsPage/TopNewsPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
  const [country, setCountry] = useState("us");

  const selectCountry = (country) => {
    setCountry(country);
  };
  return (
    <CountryContext.Provider
      value={{ country: country, selectCountry: selectCountry }}
    >
      <Router>
        <Header />
        <Switch>
          <Route path="/TopNewsPage">
            <TopNewsPage />
          </Route>
          <Route path="/CategoriesPage">
            <CategoriesPage />
          </Route>
          <Route path="/SearchPage">
            <SearchPage />
          </Route>
          <Redirect to="/TopNewsPage">
            <TopNewsPage />
          </Redirect>
        </Switch>
      </Router>
    </CountryContext.Provider>
  );
};

export default App;
