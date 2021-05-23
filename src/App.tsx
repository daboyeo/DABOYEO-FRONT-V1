import React, { FC } from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Component";
import { GlobalStyle } from "./GlobalStyle";
import { ClubPage, IndexPage, ProfilePage, SearchPage } from "./Page";
import DetailFeedPage from "./Page/Index/DetailFeed/DetailFeed";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <DetailFeedPage />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/profile/:id" component={ProfilePage} />
        <Route exact path="/club" component={ClubPage} />
        <Route exact path="/search/:keyword" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
