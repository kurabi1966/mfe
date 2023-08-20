import React from "react";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { Switch, Route, Router } from "react-router-dom";

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
const generateClassName = createGenerateClassName({ productionPrefix: "aut" });

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SignIn}></Route>
            <Route path="/auth/signup" component={SignUp}></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
