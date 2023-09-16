import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

const provisionalComponent = () => <h1>Hello world</h1>;

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={provisionalComponent} />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
