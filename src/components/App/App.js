import React, { Component } from "react";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Movie from "../Movie/Movie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieID" component={Movie} exact />
          <Route component={NotFound} exact />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
