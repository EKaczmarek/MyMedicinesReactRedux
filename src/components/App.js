import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import MedicinesPage from "./medicines/MedicinesPage";
import ManageMedicinePage from "./medicines/ManageMedicinePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/medicines" component={MedicinesPage} />
        <Route path="/medicine/:slug" component={ManageMedicinePage} />
        <Route path="/medicine" component={ManageMedicinePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
