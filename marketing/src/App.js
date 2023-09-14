import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
