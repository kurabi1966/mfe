import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
const generateClassName = createGenerateClassName({ productionPrefix: "con" });

import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";

import Header from "./components/Header";
export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp}></Route>
            <Route path="/" component={MarketingApp}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
