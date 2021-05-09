// import "core/assets/css/index.css";
import React from "react";
import { render, setConfig, modulesBuilder, routesBuilder, translationsBuilder } from "core/functions";
import Application from "core/application";
import storeBuilder from "core/store";
import languages from "core/translations";
import reportWebVitals from "reportWebVitals";

const appBuilder = ({ modules }) => {
  setConfig();
  
  const app = modulesBuilder(modules);
  const routes = routesBuilder(app);
  const translations = translationsBuilder(Object.keys(languages), app);
  const store = storeBuilder(app);
  
  render(
    <Application
      store={store}
      routes={routes}
      translations={translations}
    />
  );
      
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};

export default appBuilder;