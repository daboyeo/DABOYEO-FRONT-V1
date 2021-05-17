import React, { FC } from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Component";
import { GlobalStyle } from "./GlobalStyle";
import { ClubPage, IndexPage, ProfilePage, SearchPage } from "./Page";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/club" component={ClubPage} />
        <Route exact path="/search/:keyword" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
