import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import TopNewsPage from "./pages/TopNewsPage/TopNewsPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const App = () => {
  return (
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
  );
};

export default App;
