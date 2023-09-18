import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "./components/Signin";
import SignUp from "./components/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch>
        <Route path="/auth/signIn" component={SignIn} />
        <Route path="/auth/signUp" component={SignUp} />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
