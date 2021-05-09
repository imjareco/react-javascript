import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import i18n from "core/i18n";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "core/routes";
import { Navbar } from "core/components/navbar";
import "core/sanitize/reset.css";

const Application = ({ store, routes, translations }) => {
  return (
    <I18nextProvider i18n={i18n(translations)} >
      <Provider store={store}>    
          <Router>
            <Navbar title={"App"} />
            <Routes routes={routes} />
          </Router>
      </Provider>
    </I18nextProvider>
  );
};

Application.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  translations: PropTypes.any
};

export default Application;