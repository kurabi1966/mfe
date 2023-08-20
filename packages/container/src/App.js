import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
const generateClassName = createGenerateClassName({ productionPrefix: "con" });
import Header from "./components/Header";

// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
import Progress from "./components/Progress";

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy}></Route>
              <Route path="/" component={MarketingLazy}></Route>
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
