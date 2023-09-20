import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/Auth"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          <Route path="/auth" component={AuthLazy} />
          <Route path="/" component={MarketingLazy} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
